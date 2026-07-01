import { motion, useReducedMotion } from "framer-motion";
import logoDark from "@/assets/logo-symbol.png";

export function TrionyxLoader({
    compact = false,
    label = "IT Solutions",
    brandName = "TRIONYX",
}) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            className={
                compact
                    ? "relative grid min-h-[420px] place-items-center overflow-hidden rounded-3xl bg-[#020617]"
                    : "fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#020617]"
            }
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03, filter: "blur(10px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            role="status"
            aria-label="Loading Trionyx"
        >
            {/* Dark cinematic background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.16),transparent_35%),linear-gradient(135deg,#020617,#07111f_55%,#020617)]" />

            {/* 3D metallic floor */}
            <div className="absolute inset-x-[-20%] bottom-[-18%] h-[55%] rotate-[-2deg] bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30 [transform:perspective(650px)_rotateX(62deg)]" />

            {/* Soft fog */}
            <motion.div
                className="absolute bottom-0 h-52 w-full bg-gradient-to-t from-slate-300/10 via-slate-300/5 to-transparent blur-2xl"
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            opacity: [0.22, 0.4, 0.22],
                        }
                }
                transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative flex flex-col items-center px-6 text-center">
                <div className="relative grid h-[280px] w-[320px] place-items-center sm:h-[320px] sm:w-[380px]">
                    {/* Fast holographic formation - disappears before logo */}
                    {!reduceMotion && (
                        <>
                            <motion.div
                                className="absolute h-48 w-48 rounded-[34%] border border-cyan-100/45 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(34,211,238,0.08),rgba(15,23,42,0.1))] shadow-[0_0_45px_rgba(34,211,238,0.45),inset_0_0_35px_rgba(255,255,255,0.14)] backdrop-blur-sm"
                                initial={{
                                    opacity: 0,
                                    scale: 0.35,
                                    rotate: -28,
                                    filter: "blur(14px)",
                                }}
                                animate={{
                                    opacity: [0, 1, 0.9, 0],
                                    scale: [0.35, 1, 1.08, 0.15],
                                    rotate: [-28, 14, 48, 90],
                                    filter: ["blur(14px)", "blur(0px)", "blur(1px)", "blur(18px)"],
                                }}
                                transition={{
                                    duration: 0.75,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            />

                            {/* Wireframe scan lines */}
                            {[0, 1, 2, 3, 4, 5].map((item) => (
                                <motion.div
                                    key={item}
                                    className="absolute h-44 w-px rounded-full bg-cyan-100/70 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                                    style={{
                                        rotate: `${item * 30}deg`,
                                    }}
                                    initial={{ opacity: 0, scaleY: 0.08 }}
                                    animate={{
                                        opacity: [0, 1, 0.65, 0],
                                        scaleY: [0.08, 1, 0.7, 0],
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay: item * 0.025,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                />
                            ))}

                            {/* Horizontal energy ring - fades before logo */}
                            <motion.div
                                className="absolute h-28 w-72 rounded-[50%] border border-cyan-100/55 shadow-[0_0_32px_rgba(34,211,238,0.42)]"
                                initial={{ opacity: 0, scale: 0.35, rotate: -12 }}
                                animate={{
                                    opacity: [0, 1, 0.8, 0],
                                    scale: [0.35, 1, 1.05, 0.5],
                                    rotate: [-12, 8, 20, 32],
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            />
                        </>
                    )}

                    {/* Slower cinematic logo reveal */}
                    <motion.div
                        className="relative z-20 grid place-items-center"
                        initial={{
                            opacity: 0,
                            y: 32,
                            scale: 0.68,
                            rotateX: 55,
                            filter: "blur(18px)",
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            rotateX: 0,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            delay: reduceMotion ? 0 : 0.95,
                            duration: 1.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* 3D metallic plate behind logo */}
                        <div className="absolute h-44 w-56 rounded-[32px] bg-[linear-gradient(145deg,rgba(255,255,255,0.24),rgba(148,163,184,0.1),rgba(15,23,42,0.45))] shadow-[inset_0_2px_8px_rgba(255,255,255,0.25),inset_0_-8px_20px_rgba(15,23,42,0.8),0_30px_90px_rgba(148,163,184,0.22)] blur-[0.2px]" />

                        <img
                            src={logoDark}
                            alt="Trionyx"
                            className="relative z-10 w-60 object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.9)] sm:w-72"
                        />

                        {/* Metallic shine */}
                        {!reduceMotion && (
                            <motion.div
                                className="absolute z-30 h-44 w-10 rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-md"
                                initial={{ x: -160, opacity: 0 }}
                                animate={{ x: 160, opacity: [0, 1, 0] }}
                                transition={{
                                    delay: 2,
                                    duration: 1.1,
                                    repeat: Infinity,
                                    repeatDelay: 2.2,
                                    ease: "easeInOut",
                                }}
                            />
                        )}
                    </motion.div>
                </div>

                {/* Brand name reveal */}
                <motion.h1
                    className="relative mt-[-12px] bg-[linear-gradient(180deg,#ffffff,#cbd5e1_35%,#64748b_70%,#f8fafc)] bg-clip-text font-display text-4xl font-black tracking-[0.2em] text-transparent drop-shadow-[0_8px_0_rgba(15,23,42,0.65)] sm:text-5xl"
                    initial={{
                        opacity: 0,
                        y: 38,
                        scaleY: 1.25,
                        letterSpacing: "0.44em",
                        filter: "blur(14px)",
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scaleY: 1,
                        letterSpacing: "0.2em",
                        filter: "blur(0px)",
                    }}
                    transition={{
                        delay: reduceMotion ? 0 : 1.65,
                        duration: 0.95,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {brandName}
                </motion.h1>

                <motion.div
                    className="mt-1 h-8 w-80 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.32),transparent)] blur-xl"
                    initial={{ opacity: 0, scaleX: 0.35 }}
                    animate={{ opacity: [0, 0.75, 0.42], scaleX: 1 }}
                    transition={{
                        delay: reduceMotion ? 0 : 2.35,
                        duration: 0.85,
                        ease: "easeOut",
                    }}
                />

                <motion.p
                    className="mt-1 text-xs font-semibold uppercase tracking-[0.42em] text-slate-200/75 sm:text-sm"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: reduceMotion ? 0 : 2.55,
                        duration: 0.65,
                        ease: "easeOut",
                    }}
                >
                    {label}
                </motion.p>

                <div className="mt-7 h-px w-72 overflow-hidden rounded-full bg-white/15 sm:w-96">
                    <motion.div
                        className="h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_18px_rgba(255,255,255,0.8)]"
                        initial={{ x: "-130%" }}
                        animate={{ x: "250%" }}
                        transition={{
                            duration: 1.25,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
}