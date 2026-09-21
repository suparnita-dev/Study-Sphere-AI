"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  Code2,
  Play,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const LOGO = "/study-sphere-logo-cropped.png";

const lessons = [
  {
    title: "Concept overview",
    description: "Understand the fundamentals of stacks and queues.",
    icon: BookOpen,
    duration: "8 min",
  },
  {
    title: "Visual explanation",
    description: "See how data moves through a stack step by step.",
    icon: Target,
    duration: "10 min",
  },
  {
    title: "Implementation examples",
    description: "Implement stack operations using C.",
    icon: Code2,
    duration: "14 min",
  },
  {
    title: "Practice questions",
    description: "Test your understanding with quick questions.",
    icon: Sparkles,
    duration: "12 min",
  },
];

export default function DSAPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fd] text-[#071426]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 h-[70px] border-b border-blue-100 bg-white/90 backdrop-blur-xl">

        <div className="flex h-full items-center justify-between px-5 sm:px-8">

          {/* LOGO */}
          <Link href="/dashboard">
            <Image
              src={LOGO}
              alt="Study Sphere"
              width={190}
              height={60}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <div className="hidden items-center gap-2 sm:flex">

              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-blue-50">

                <div className="h-full w-[45%] rounded-full bg-blue-600" />

              </div>

              <span className="text-[9px] font-bold text-blue-600">
                45%
              </span>

            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-500">
              <Sparkles size={15} />
            </button>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-[9px] font-bold text-white">
              S
            </div>

          </div>

        </div>

      </header>

      {/* PAGE */}
      <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

        {/* BREADCRUMB */}
        <div className="flex flex-wrap items-center gap-2 text-[8px] font-semibold text-slate-400">

          <Link
            href="/dashboard"
            className="transition hover:text-blue-600"
          >
            Dashboard
          </Link>

          <ChevronRight size={11} />

          <Link
            href="/subjects"
            className="transition hover:text-blue-600"
          >
            My Subjects
          </Link>

          <ChevronRight size={11} />

          <span className="text-slate-600">
            Data Structures
          </span>

        </div>

        {/* HERO */}
        <section className="relative mt-7 overflow-hidden rounded-[24px] bg-[#071426] p-7 shadow-xl shadow-blue-100/30 sm:p-9 lg:p-11">

          <div className="tech-grid-dark absolute inset-0 opacity-50" />

          <div className="relative">

            <div className="flex flex-wrap items-center gap-2">

              <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-[8px] font-bold tracking-wider text-cyan-400 ring-1 ring-blue-400/20">
                ECE • SEMESTER 3
              </span>

              <span className="rounded-full bg-white/5 px-3 py-1.5 text-[8px] font-bold text-slate-400 ring-1 ring-white/10">
                CORE SUBJECT
              </span>

            </div>

            <h1 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Data Structures
            </h1>

            <p className="mt-4 max-w-2xl text-[11px] leading-6 text-slate-400 sm:text-[12px]">
              Master the foundations of efficient problem solving through
              interactive lessons, visual explanations, coding examples and
              collaborative learning.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">

                <BookOpen
                  size={14}
                  className="text-cyan-400"
                />

                <div>

                  <p className="text-[8px] font-bold text-slate-500">
                    CHAPTERS
                  </p>

                  <p className="text-[10px] font-bold text-white">
                    12 chapters
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">

                <Clock3
                  size={14}
                  className="text-cyan-400"
                />

                <div>

                  <p className="text-[8px] font-bold text-slate-500">
                    EST. TIME
                  </p>

                  <p className="text-[10px] font-bold text-white">
                    4h 30m
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">

                <Users
                  size={14}
                  className="text-cyan-400"
                />

                <div>

                  <p className="text-[8px] font-bold text-slate-500">
                    STUDY GROUP
                  </p>

                  <p className="text-[10px] font-bold text-white">
                    24 learners
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* PROGRESS */}
        <section className="mt-6 rounded-[20px] border border-blue-100 bg-white p-5 sm:p-6">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[8px] font-bold tracking-[0.18em] text-blue-600">
                YOUR PROGRESS
              </p>

              <h2 className="mt-1 text-base font-extrabold">
                Keep building your streak
              </h2>

            </div>

            <div className="text-left sm:text-right">

              <p className="text-lg font-extrabold text-blue-600">
                45%
              </p>

              <p className="text-[8px] font-semibold text-slate-400">
                5 of 12 chapters completed
              </p>

            </div>

          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-50">

            <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

          </div>

        </section>

        {/* CURRENT CHAPTER */}
        <section className="mt-8">

          <div className="mb-4">

            <p className="text-[8px] font-bold tracking-[0.18em] text-blue-600">
              CURRENT MODULE
            </p>

            <h2 className="mt-1 text-xl font-extrabold">
              Stacks & Queues
            </h2>

            <p className="mt-2 text-[10px] leading-5 text-slate-400">
              Learn LIFO and FIFO structures, their operations and practical
              implementations.
            </p>

          </div>

          {/* CHAPTER CARD */}
          <div className="rounded-[22px] border border-blue-100 bg-white p-5 shadow-sm sm:p-7">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

                  <Code2 size={20} />

                </div>

                <div>

                  <div className="flex flex-wrap items-center gap-2">

                    <span className="text-[8px] font-bold tracking-wider text-blue-600">
                      CHAPTER 03
                    </span>

                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[7px] font-bold text-emerald-600">
                      IN PROGRESS
                    </span>

                  </div>

                  <h3 className="mt-2 text-lg font-extrabold">
                    Stacks & Queues
                  </h3>

                  <p className="mt-2 max-w-xl text-[9px] leading-5 text-slate-400">
                    Understand how stacks and queues work and implement their
                    core operations using C.
                  </p>

                </div>

              </div>

              {/* START BUTTON — 3C */}
              <Link
                href="/subjects/dsa/lesson"
                className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[9px] font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                <Play
                  size={12}
                  fill="currentColor"
                />

                Start chapter

              </Link>

            </div>

          </div>

        </section>

        {/* LESSONS */}
        <section className="mt-8">

          <div className="mb-4">

            <p className="text-[8px] font-bold tracking-[0.18em] text-blue-600">
              LEARNING PATH
            </p>

            <h2 className="mt-1 text-xl font-extrabold">
              Chapter lessons
            </h2>

          </div>

          <div className="space-y-3">

            {lessons.map((lesson, index) => {

              const Icon = lesson.icon;

              return (

                <Link
                  href="/subjects/dsa/lesson"
                  key={lesson.title}
                  className="group flex items-center gap-4 rounded-[17px] border border-blue-100 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-lg hover:shadow-blue-100/30 sm:p-5"
                >

                  {/* NUMBER */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      index < 2
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >

                    {index < 2 ? (
                      <Check size={15} />
                    ) : (
                      <Icon size={16} />
                    )}

                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-center gap-2">

                      <h3 className="text-[11px] font-extrabold text-slate-800 transition group-hover:text-blue-700">
                        {lesson.title}
                      </h3>

                      {index < 2 && (
                        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[6px] font-bold text-emerald-600">
                          COMPLETED
                        </span>
                      )}

                    </div>

                    <p className="mt-1 text-[8px] leading-4 text-slate-400">
                      {lesson.description}
                    </p>

                  </div>

                  {/* DURATION */}
                  <div className="hidden items-center gap-1 text-[8px] font-semibold text-slate-400 sm:flex">

                    <Clock3 size={11} />

                    {lesson.duration}

                  </div>

                  <ChevronRight
                    size={15}
                    className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500"
                  />

                </Link>

              );

            })}

          </div>

        </section>

        {/* STUDY TOGETHER */}
        <section className="mt-8 grid gap-4 md:grid-cols-2">

          <div className="rounded-[20px] border border-blue-100 bg-white p-6">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users size={17} />
            </div>

            <h3 className="mt-4 text-base font-extrabold">
              Study together
            </h3>

            <p className="mt-2 text-[9px] leading-5 text-slate-400">
              Join your classmates, discuss difficult concepts and learn
              together in real time.
            </p>

            <button className="mt-5 flex items-center gap-2 text-[9px] font-bold text-blue-600">

              Open study group

              <ArrowRight size={12} />

            </button>

          </div>

          <div className="rounded-[20px] border border-blue-100 bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg shadow-blue-600/10">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Sparkles size={17} />
            </div>

            <h3 className="mt-4 text-base font-extrabold">
              Need help?
            </h3>

            <p className="mt-2 text-[9px] leading-5 text-blue-100">
              Ask your AI study assistant to explain concepts, generate
              examples or help you revise.
            </p>

            <button className="mt-5 flex items-center gap-2 text-[9px] font-bold text-white">

              Ask AI Tutor

              <ArrowRight size={12} />

            </button>

          </div>

        </section>

        {/* BOTTOM NAV */}
        <div className="mt-10 flex items-center justify-between border-t border-blue-100 pt-6">

          <Link
            href="/subjects"
            className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-[9px] font-bold text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
          >

            <ArrowLeft size={13} />

            All subjects

          </Link>

          <Link
            href="/subjects/dsa/lesson"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-[9px] font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >

            Continue learning

            <ArrowRight size={13} />

          </Link>

        </div>

      </div>

    </main>
  );
}