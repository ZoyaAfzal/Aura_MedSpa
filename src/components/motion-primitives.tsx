import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useSpring, useMotionValue, useScroll, useTransform, useInView } from "framer-motion";

/* -------- Magnetic Button -------- */
export function MagneticButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* -------- Scroll Reveal -------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 50,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------- Animated Counter -------- */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 30, stiffness: 60 });

  if (inView) motionVal.set(to);

  spring.on("change", (v) => {
    if (ref.current) ref.current.textContent = Math.floor(v).toLocaleString() + suffix;
  });

  return <span ref={ref}>0{suffix}</span>;
}

/* -------- Parallax wrapper -------- */
export function Parallax({ children, offset = 180 }: { children: ReactNode; offset?: number }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, offset]);
  return <motion.div style={{ y }}>{children}</motion.div>;
}

/* -------- Char reveal -------- */
export function CharReveal({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.025, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline-block", whiteSpace: c === " " ? "pre" : "normal" }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}
