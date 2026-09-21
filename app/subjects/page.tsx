"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  FileText,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

const LOGO = "/study-sphere-logo-cropped.png";

const subjects = [
  {
    name: "Data Structures",
    code: "DSA",
    description:
      "Learn arrays, linked lists, stacks, queues, trees, graphs and algorithmic thinking.",
    progress: 72,
    chapters: 12,
    completed: 8,
    icon: Brain,
    gradient: "from-blue-600 to-cyan-400",
    href: "/subjects/dsa",
    status: "In Progress",
  },
  {
    name: "Engineering Mathematics",
    code: "MAT",
    description:
      "Organize mathematical concepts, formulas, problem sets and revision resources.",
    progress: 64,
    chapters: 10,
    completed: 6,
    icon: BookOpen,
    gradient: "from-indigo-600 to-blue-400",
    href: "/subjects",
    status: "In Progress",
  },
  {
    name: "Digital Electronics",
    code: "DE",
    description:
      "Study digital logic, Boolean algebra, circuits, sequential systems and more.",
    progress: 48,
    chapters: 9,
    completed: 4,
    icon: Zap,
    gradient: "from-cyan-500 to-blue-500",
    href: "/subjects",
    status: "In Progress",
  },
];

export default function SubjectsPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fd] text-[#071426]">

      {/* HEADER */}

      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/90 backdrop-blur-xl">

        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-7">

          <div className="flex items-center gap-5">

            <Link
              href="/dashboard"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
            >
              <ArrowLeft size={16} />
            </Link>

            <Link href="/">
              <Image
                src={LOGO}
                alt="Study Sphere"
                width={190}
                height={60}
                priority
                className="h-11 w-auto object-contain"
              />
            </Link>

          </div>

          <div className="hidden items-center gap-2 rounded-xl border border-blue-100 bg-[#f8fbff] px-3 py-2 sm:flex">

            <Search size={14} className="text-slate-400" />

            <input
              placeholder="Search subjects..."
              className="w-44 bg-transparent text-[11px] outline-none placeholder:text-slate-400"
            />

          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-[10px] font-bold text-white">
            S
          </div>

        </div>

      </header>

      {/* CONTENT */}

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-7 lg:py-14">

        {/* INTRO */}

        <section className="relative overflow-hidden rounded-[24px] border border-blue-200 bg-gradient-to-br from-[#eaf3ff] via-white to-[#effaff] p-7 sm:p-9">

          <div className="tech-grid absolute inset-0 opacity-40" />

          <div className="absolute right-[-80px] top-[-100px] h-[260px] w-[260px] rounded-full bg-blue-200/40 blur-[80px]" />

          <div className="relative">

            <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-blue-600">

              <Sparkles size={12} />

              MY LEARNING SPACE

            </div>

            <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              My Subjects
            </h1>

            <p className="mt-3 max-w-2xl text-[12px] leading-6 text-slate-500 sm:text-[14px]">
              Everything you are learning, organized in one connected
              workspace.
            </p>

          </div>

        </section>

        {/* SUBJECTS */}

        <section className="mt-8">

          <div className="flex items-end justify-between">

            <div>

              <p className="text-[9px] font-bold tracking-[0.18em] text-blue-600">
                ACTIVE COURSES
              </p>

              <h2 className="mt-1 text-xl font-extrabold">
                Continue your journey
              </h2>

            </div>

            <span className="text-[10px] font-semibold text-slate-400">
              {subjects.length} subjects
            </span>

          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">

            {subjects.map((subject) => {

              const Icon = subject.icon;

              return (
                <Link
                  href={subject.href}
                  key={subject.code}
                  className="group overflow-hidden rounded-[20px] border border-blue-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                >

                  <div
                    className={`relative h-32 overflow-hidden bg-gradient-to-br ${subject.gradient} p-5`}
                  >

                    <div className="absolute right-[-30px] top-[-50px] h-36 w-36 rounded-full bg-white/10 blur-2xl" />

                    <div className="relative flex items-start justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                        <Icon size={20} />
                      </div>

                      <span className="rounded-full bg-white/15 px-2.5 py-1 text-[8px] font-bold text-white backdrop-blur">
                        {subject.status}
                      </span>

                    </div>

                    <div className="absolute bottom-4 left-5">

                      <p className="text-[8px] font-bold tracking-[0.18em] text-white/70">
                        {subject.code}
                      </p>

                      <h3 className="mt-0.5 text-lg font-extrabold text-white">
                        {subject.name}
                      </h3>

                    </div>

                  </div>

                  <div className="p-5">

                    <p className="min-h-[52px] text-[11px] leading-5 text-slate-500">
                      {subject.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-[9px] font-semibold text-slate-400">
                        {subject.completed} of {subject.chapters} chapters
                      </span>

                      <span className="text-[11px] font-extrabold text-blue-600">
                        {subject.progress}%
                      </span>

                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">

                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${subject.gradient}`}
                        style={{
                          width: `${subject.progress}%`,
                        }}
                      />

                    </div>

                    <div className="mt-5 flex items-center justify-between">

                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600">

                        <FileText
                          size={13}
                          className="text-blue-500"
                        />

                        Notes available

                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

                        <ArrowRight size={14} />

                      </span>

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        </section>

        {/* ADD SUBJECT */}

        <section className="mt-8">

          <button className="flex w-full items-center justify-center gap-2 rounded-[18px] border border-dashed border-blue-200 bg-white py-5 text-[11px] font-bold text-blue-600 transition hover:border-blue-300 hover:bg-blue-50">

            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
              +
            </span>

            Add another subject

          </button>

        </section>

        {/* LEARNING TIP */}

        <section className="mt-8 flex flex-col gap-4 rounded-[20px] border border-blue-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <CheckCircle2 size={19} />
            </div>

            <div>

              <p className="text-[9px] font-bold tracking-[0.18em] text-blue-600">
                STUDY TIP
              </p>

              <p className="mt-1 text-[11px] font-semibold text-slate-600">
                Small consistent sessions beat last-minute cramming.
              </p>

            </div>

          </div>

          <Link
            href="/subjects/dsa"
            className="flex items-center gap-2 text-[10px] font-bold text-blue-600"
          >
            Continue DSA
            <ChevronRight size={13} />
          </Link>

        </section>

      </div>

    </main>
  );
}