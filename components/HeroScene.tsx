"use client";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Billboard, Sparkles } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";
import {
    siReact, siNextdotjs, siTypescript, siPython, siNodedotjs,
    siTailwindcss, siPostgresql, siDocker, siHuggingface, siLangchain,
    siVercel, siSupabase, siClaude, siOllama, siGooglegemini,
} from "simple-icons";

// OpenAI mark, embedded by hand (not in simple-icons due to trademark policy)
const siOpenaiCustom = {
    path: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z",
};

const ICONS = [
    siReact, siNextdotjs, siTypescript, siPython, siNodedotjs, siTailwindcss,
    siPostgresql, siDocker, siHuggingface, siLangchain, siVercel, siSupabase,
    siOpenaiCustom, siClaude, siOllama, siGooglegemini,
];

const RADIUS = 2.5;

function iconDataUri(path: string, fill: string) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="${fill}" d="${path}"/></svg>`;
    return "data:image/svg+xml," + encodeURIComponent(svg);
}

// Even point distribution on a sphere (fibonacci)
function fibSphere(n: number, r: number): [number, number, number][] {
    const pts: [number, number, number][] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2;
        const rad = Math.sqrt(Math.max(0, 1 - y * y));
        const th = phi * i;
        pts.push([Math.cos(th) * rad * r, y * r, Math.sin(th) * rad * r]);
    }
    return pts;
}

function makeGlowTexture(rgb: string) {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, `rgba(${rgb},0.5)`);
    g.addColorStop(0.5, `rgba(${rgb},0.12)`);
    g.addColorStop(1, `rgba(${rgb},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
}

function Scene({ dark }: { dark: boolean }) {
    const GREEN = dark ? "#7CE23F" : "#2E8B0A";
    const GREEN_RGB = dark ? "124,226,63" : "46,139,10";
    const ICON_FILL = dark ? "#EAF0F7" : "#1A2338";

    const positions = useMemo(() => fibSphere(ICONS.length, RADIUS), []);
    const urls = useMemo(() => ICONS.map((ic) => iconDataUri(ic.path, ICON_FILL)), [ICON_FILL]);
    const textures = useLoader(THREE.TextureLoader, urls);
    textures.forEach((t) => {
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
    });
    const glow = useMemo(() => makeGlowTexture(GREEN_RGB), [GREEN_RGB]);

    // connect each node to its 2 nearest neighbours, as one lineSegments buffer
    const linePositions = useMemo(() => {
        const set = new Set<string>();
        const key = (a: number, b: number) => (a < b ? `${a}-${b}` : `${b}-${a}`);
        positions.forEach((p, i) => {
            const near = positions
                .map((q, j) => ({ j, d: (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2 + (p[2] - q[2]) ** 2 }))
                .filter((o) => o.j !== i)
                .sort((a, b) => a.d - b.d);
            set.add(key(i, near[0].j));
            set.add(key(i, near[1].j));
        });
        const edges = [...set].map((s) => s.split("-").map(Number) as [number, number]);
        const arr = new Float32Array(edges.length * 6);
        edges.forEach(([a, b], k) => {
            arr.set(positions[a], k * 6);
            arr.set(positions[b], k * 6 + 3);
        });
        return arr;
    }, [positions]);

    const parallax = useRef<THREE.Group>(null);
    const spin = useRef<THREE.Group>(null);
    const { pointer } = useThree();

    useFrame((_, delta) => {
        if (spin.current) spin.current.rotation.y += delta * 0.07;
        if (parallax.current) {
            parallax.current.rotation.x = THREE.MathUtils.lerp(parallax.current.rotation.x, pointer.y * 0.18, 0.05);
            parallax.current.rotation.y = THREE.MathUtils.lerp(parallax.current.rotation.y, pointer.x * 0.25, 0.05);
        }
    });

    return (
        <group ref={parallax}>
            <group ref={spin}>
                <lineSegments>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
                    </bufferGeometry>
                    <lineBasicMaterial color={GREEN} transparent opacity={0.4} toneMapped={false} depthWrite={false} />
                </lineSegments>

                {positions.map((p, i) => (
                    <Billboard key={i} position={p}>
                        <mesh>
                            <planeGeometry args={[1.15, 1.15]} />
                            <meshBasicMaterial map={glow} transparent depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} />
                        </mesh>
                        <mesh>
                            <planeGeometry args={[0.72, 0.72]} />
                            <meshBasicMaterial map={textures[i]} transparent depthWrite={false} toneMapped={false} />
                        </mesh>
                    </Billboard>
                ))}
                <Sparkles count={36} scale={5.5} size={1.3} speed={0.25} color={GREEN} opacity={0.4} />
            </group>
        </group>
    );
}

export default function HeroScene() {
    const { resolvedTheme } = useTheme();
    const dark = resolvedTheme === "dark";
    return (
        <Canvas
            flat
            camera={{ position: [0, 0, 9], fov: 45 }}
            gl={{ alpha: true, antialias: true, premultipliedAlpha: false, powerPreference: "high-performance" }}
            dpr={[1, 2]}
            style={{ background: "transparent" }}
            onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        >
            <Suspense fallback={null}>
                <Scene dark={dark} />
            </Suspense>
        </Canvas>
    );
}
