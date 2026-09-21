"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  FileText,
  Menu,
  Play,
  Search,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const LOGO = "/study-sphere-logo-cropped.png";

const features = [
  {
    icon: Users,
    number: "01",
    title: "Collaborative Learning",
    description:
      "Join subject-wise spaces, discuss concepts and learn from classmates and seniors.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Smart Notes",
    description:
      "Organize PDFs, handwritten notes, images and resources in one searchable workspace.",
  },
  {
    icon: Brain,
    number: "03",
    title: "AI Study Tutor",
    description:
      "Learn through guided questions, conceptual explanations and personalized assistance.",
  },
  {
    icon: Clock3,
    number: "04",
    title: "Time Bank",
    description:
      "Track focused study sessions and build consistent learning habits.",
  },
];

const benefits = [
  "Centralized study resources",
  "Peer-to-peer collaboration",
  "AI-powered learning assistance",
  "Exam-focused revision",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faff] text-[#071426]">

      {/* NAVBAR */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-blue-100/70 bg-[#f7faff]/90 backdrop-blur-xl">

        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          <Link
            href="/"
            className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={LOGO}
              alt="Study Sphere"
              width={220}
              height={70}
              priority
              className="h-[54px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#features"
              className="text-[13px] font-semibold text-slate-500 transition hover:text-blue-600"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-[13px] font-semibold text-slate-500 transition hover:text-blue-600"
            >
              How it works
            </a>

            <a
              href="#community"
              className="text-[13px] font-semibold text-slate-500 transition hover:text-blue-600"
            >
              Community
            </a>

            <a
              href="#about"
              className="text-[13px] font-semibold text-slate-500 transition hover:text-blue-600"
            >
              About
            </a>

          </div>

          {/* DESKTOP BUTTONS */}

          <div className="hidden items-center gap-3 md:flex">

            <Link
              href="/dashboard"
              className="rounded-xl px-4 py-2.5 text-[13px] font-bold text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Sign in
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-xl bg-[#0757d9] px-4 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#0649b8]"
            >
              Get Started
              <ArrowRight size={14} />
            </Link>

          </div>

          {/* MOBILE MENU */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-600 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>

        {menuOpen && (
          <div className="border-t border-blue-100 bg-white px-5 py-5 shadow-lg md:hidden">

            <div className="flex flex-col gap-2">

              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              >
                How it works
              </a>

              <a
                href="#community"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              >
                Community
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              >
                About
              </a>

              <Link
                href="/dashboard"
                className="mt-2 rounded-xl bg-[#0757d9] px-4 py-3 text-center text-sm font-bold text-white"
              >
                Get Started
              </Link>

            </div>

          </div>
        )}

      </nav>

      {/* HERO */}

      <section className="relative pt-[76px]">

        <div className="pointer-events-none absolute inset-0 -z-10">

          <div className="absolute left-1/2 top-0 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[120px]" />

          <div className="absolute right-[-200px] top-[180px] h-[400px] w-[400px] rounded-full bg-cyan-200/20 blur-[100px]" />

          <div className="absolute left-[-200px] top-[400px] h-[400px] w-[400px] rounded-full bg-indigo-200/20 blur-[100px]" />

          <div className="tech-grid absolute inset-0 opacity-50" />

        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-32">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-[11px] font-bold tracking-wide text-blue-600 shadow-sm backdrop-blur">

              <span className="relative flex h-2 w-2">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />

              </span>

              YOUR DIGITAL CLASSROOM

            </div>

            <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[#061529] sm:text-6xl lg:text-[78px]">

              Study together.

              <br />

              <span className="bg-gradient-to-r from-[#0757d9] via-[#1677ff] to-[#00a9e8] bg-clip-text text-transparent">
                Learn smarter.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-slate-500 sm:text-[17px]">
              A collaborative digital classroom for organized notes,
              intelligent study assistance, peer learning and smarter exam
              preparation.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                href="/dashboard"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0757d9] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#0649b8] sm:w-auto"
              >
                Enter Study Sphere

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#how-it-works"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 sm:w-auto"
              >
                <Play size={15} fill="currentColor" />
                See how it works
              </a>

            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-400">

              <CheckCircle2
                size={13}
                className="text-blue-500"
              />

              Built for students • Designed for collaboration

            </div>

          </div>

          {/* DASHBOARD PREVIEW */}

          <div className="mx-auto mt-20 max-w-6xl lg:mt-24">

            <div className="relative">

              <div className="absolute -inset-4 -z-10 rounded-[35px] bg-blue-500/10 blur-3xl" />

              <div className="overflow-hidden rounded-[24px] border border-blue-100 bg-white p-2 shadow-[0_30px_90px_-30px_rgba(7,87,217,0.28)]">

                <div className="overflow-hidden rounded-[18px] border border-slate-100 bg-[#f7faff]">

                  <div className="flex h-14 items-center justify-between border-b border-blue-100/70 bg-white px-5">

                    <Image
                      src={LOGO}
                      alt="Study Sphere"
                      width={150}
                      height={48}
                      className="h-9 w-auto object-contain"
                    />

                    <div className="hidden items-center gap-4 sm:flex">

                      <Search
                        size={15}
                        className="text-slate-400"
                      />

                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400" />

                    </div>

                  </div>

                  <div className="grid md:grid-cols-[190px_1fr]">

                    <div className="hidden border-r border-blue-100/70 bg-white p-4 md:block">

                      <div className="mb-6 px-2 text-[9px] font-bold tracking-widest text-slate-400">
                        WORKSPACE
                      </div>

                      <div className="space-y-1">

                        {[
                          "Dashboard",
                          "My Subjects",
                          "Notes",
                          "Study Groups",
                        ].map((item, index) => (

                          <div
                            key={item}
                            className={`rounded-lg px-3 py-2 text-[11px] font-semibold ${
                              index === 0
                                ? "bg-blue-50 text-blue-600"
                                : "text-slate-500"
                            }`}
                          >
                            {item}
                          </div>

                        ))}

                      </div>

                      <div className="mb-3 mt-8 px-2 text-[9px] font-bold tracking-widest text-slate-400">
                        LEARNING
                      </div>

                      <div className="space-y-1">

                        {[
                          "AI Tutor",
                          "Quick Revision",
                          "Practice",
                          "Analytics",
                        ].map((item) => (

                          <div
                            key={item}
                            className="rounded-lg px-3 py-2 text-[11px] font-semibold text-slate-500"
                          >
                            {item}
                          </div>

                        ))}

                      </div>

                    </div>

                    <div className="p-5 sm:p-7">

                      <div className="flex items-start justify-between">

                        <div>

                          <p className="text-[9px] font-bold tracking-widest text-blue-500">
                            STUDENT DASHBOARD
                          </p>

                          <h2 className="mt-1 text-lg font-extrabold tracking-tight sm:text-xl">
                            Good morning 👋
                          </h2>

                          <p className="mt-1 text-[10px] text-slate-400">
                            Here&apos;s your learning overview.
                          </p>

                        </div>

                        <div className="hidden rounded-lg border border-blue-100 bg-white px-3 py-2 text-[10px] font-semibold text-slate-500 sm:block">
                          This week
                        </div>

                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">

                        {[
                          ["Study Time", "12h 40m"],
                          ["Accuracy", "84%"],
                          ["Subjects", "06"],
                          ["Study Streak", "12 days"],
                        ].map(([title, value]) => (

                          <div
                            key={title}
                            className="rounded-xl border border-blue-100/80 bg-white p-4"
                          >

                            <p className="text-[9px] font-semibold text-slate-400">
                              {title}
                            </p>

                            <p className="mt-3 text-lg font-extrabold tracking-tight">
                              {value}
                            </p>

                          </div>

                        ))}

                      </div>

                      <div className="mt-3 grid gap-3 lg:grid-cols-5">

                        <div className="rounded-xl border border-blue-100/80 bg-white p-5 lg:col-span-3">

                          <p className="text-[9px] font-bold tracking-widest text-slate-400">
                            CONTINUE LEARNING
                          </p>

                          <h3 className="mt-1 text-sm font-bold">
                            Data Structures
                          </h3>

                          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-blue-50">

                            <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

                          </div>

                          <div className="mt-5 flex items-center justify-between">

                            <span className="text-[9px] text-slate-400">
                              Chapter 4 of 6
                            </span>

                            <span className="text-[10px] font-bold text-blue-600">
                              Continue →
                            </span>

                          </div>

                        </div>

                        <div className="rounded-xl border border-blue-100/80 bg-white p-5 lg:col-span-2">

                          <p className="text-[9px] font-bold tracking-widest text-blue-500">
                            QUICK REVISION
                          </p>

                          <h3 className="mt-1 text-sm font-bold">
                            Tomorrow&apos;s exam
                          </h3>

                          <div className="mt-4 space-y-2.5">

                            {[
                              "Key formulas",
                              "Important questions",
                              "Short summaries",
                            ].map((item) => (

                              <div
                                key={item}
                                className="flex items-center gap-2 text-[10px] font-medium text-slate-500"
                              >

                                <CheckCircle2
                                  size={13}
                                  className="text-blue-500"
                                />

                                {item}

                              </div>

                            ))}

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="border-t border-blue-100/70 bg-white py-24 sm:py-28"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-blue-600">

                <span className="h-px w-7 bg-blue-500" />

                BUILT FOR STUDENTS

              </div>

              <h2 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">

                Everything you need to
                <br />

                <span className="text-blue-600">
                  learn better.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              One connected learning environment that brings your resources,
              classmates and intelligent study tools together.
            </p>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-[#f8fbff] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/60"
                >

                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-100/40 blur-2xl" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 shadow-sm">
                        <Icon size={18} />
                      </div>

                      <span className="text-[10px] font-bold text-blue-200">
                        {feature.number}
                      </span>

                    </div>

                    <h3 className="mt-7 text-[15px] font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-6 text-slate-500">
                      {feature.description}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section
        id="how-it-works"
        className="relative overflow-hidden border-t border-blue-100 bg-[#071426] py-24 text-white sm:py-28"
      >

        <div className="pointer-events-none absolute inset-0">

          <div className="tech-grid-dark absolute inset-0 opacity-40" />

          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

          <div className="self-center">

            <div className="mb-5 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-cyan-400">

              <span className="h-px w-7 bg-cyan-400" />

              ONE CONNECTED ECOSYSTEM

            </div>

            <h2 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">

              From missed lectures
              <br />
              to confident revision.

            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              Find resources, learn with peers, ask better questions and
              prepare for exams without jumping between disconnected
              platforms.
            </p>

            <div className="mt-8 space-y-4">

              {benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm font-medium text-slate-200"
                >

                  <CheckCircle2
                    size={15}
                    className="text-cyan-400"
                  />

                  {benefit}

                </div>

              ))}

            </div>

          </div>

          <div
            id="community"
            className="relative"
          >

            <div className="absolute -inset-5 rounded-3xl bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-blue-400/15 bg-white/[0.045] p-2 backdrop-blur-xl">

              <div className="rounded-[22px] border border-white/10 bg-[#0a1c32] p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-[9px] font-bold tracking-widest text-cyan-400">
                      STUDY GROUP
                    </p>

                    <h3 className="mt-1 text-lg font-bold">
                      Data Structures
                    </h3>

                  </div>

                  <div className="flex -space-x-2">

                    {["A", "R", "S", "+12"].map((letter, index) => (

                      <div
                        key={letter}
                        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a1c32] text-[9px] font-bold ${
                          index === 0
                            ? "bg-blue-500"
                            : index === 1
                              ? "bg-cyan-500"
                              : index === 2
                                ? "bg-indigo-500"
                                : "bg-slate-700"
                        }`}
                      >
                        {letter}
                      </div>

                    ))}

                  </div>

                </div>

                <div className="mt-7 space-y-3">

                  {[
                    ["New notes uploaded", "Linked Lists — Complete handwritten notes"],
                    ["AI Tutor is ready", "Continue your conceptual practice session."],
                    ["Quick revision pack", "12 important questions added by your group."],
                  ].map(([title, description]) => (

                    <div
                      key={title}
                      className="rounded-xl border border-white/5 bg-white/[0.04] p-4"
                    >

                      <p className="text-xs font-bold">
                        {title}
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-slate-500">
                        {description}
                      </p>

                    </div>

                  ))}

                </div>

                <Link
                  href="/dashboard"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
                >
                  Open Study Sphere
                  <ArrowRight size={14} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="border-t border-blue-100 bg-[#f7faff] py-24 sm:py-28"
      >

        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Sparkles size={20} />
          </div>

          <p className="mt-7 text-[10px] font-bold tracking-[0.2em] text-blue-600">
            THE STUDY SPHERE VISION
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">

            A classroom shouldn&apos;t end

            <span className="text-blue-600">
              {" "}when the lecture ends.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500">
            Study Sphere brings students together so knowledge, resources and
            support can continue beyond the classroom.
          </p>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden border-t border-blue-100 bg-white py-24 sm:py-28">

        <div className="absolute left-1/2 top-1/2 -z-0 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">

          <Image
            src={LOGO}
            alt="Study Sphere"
            width={240}
            height={80}
            className="mx-auto h-16 w-auto object-contain"
          />

          <h2 className="mt-7 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl lg:text-6xl">

            Your classroom.
            <br />

            <span className="text-blue-600">
              Reimagined.
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Connect, collaborate and prepare smarter with your digital
            classroom.
          </p>

          <Link
            href="/dashboard"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0757d9] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#0649b8]"
          >
            Start Learning

            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-blue-100 bg-[#f7faff]">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <Image
            src={LOGO}
            alt="Study Sphere"
            width={180}
            height={60}
            className="h-10 w-auto object-contain"
          />

          <p className="text-[10px] text-slate-400">
            Collaborative learning for a better academic journey.
          </p>

        </div>

      </footer>

    </main>
  );
}