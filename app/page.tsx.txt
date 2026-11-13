"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  ExternalLink,
  Trophy,
  Cpu,
  Mouse,
  Crosshair,
  Briefcase,
  Gamepad2,
  MapPin,
  Mail,
  GraduationCap,
  Sparkles,
  Globe,
} from "lucide-react";
import { profileData, ExperienceCategory } from "@/data/profile";

type Tab = "overview" | "experience" | "gear" | "settings";
type FilterOption = "all" | ExperienceCategory;

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [expFilter, setExpFilter] = useState<FilterOption>("all");
  const [copiedCrosshair, setCopiedCrosshair] = useState(false);

  const copyCrosshair = () => {
    navigator.clipboard.writeText(profileData.valorantSettings.crosshairCode);
    setCopiedCrosshair(true);
    setTimeout(() => setCopiedCrosshair(false), 2000);
  };

  const filteredExperience =
    expFilter === "all"
      ? profileData.workExperience
      : profileData.workExperience.filter((item) => item.category === expFilter);

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Banner */}
      <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-gradient-to-r from-zinc-900 via-emerald-950/40 to-zinc-900 border-b border-zinc-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
      </div>

      {/* Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        {/* Profile Header */}
        <div className="relative -mt-16 sm:-mt-20 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-5">
            {/* Avatar */}
            <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-2xl bg-zinc-900 border-4 border-[#0a0a0c] shadow-xl flex items-center justify-center text-3xl font-bold tracking-tighter text-emerald-400">
              sc
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight lowercase">
                  {profileData.handle}
                </h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {profileData.status}
                </span>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base font-medium">
                {profileData.fullName} •{" "}
                <span className="text-zinc-400 font-normal">
                  {profileData.tagline}
                </span>
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 pt-1">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {profileData.location}
                </span>
                <a
                  href={`mailto:${profileData.contactEmail}`}
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-emerald-400 transition"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {profileData.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2">
            {profileData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 hover:text-white transition"
              >
                {social.name}
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 border-b border-zinc-800/80 mb-8 overflow-x-auto">
          {(
            [
              { id: "overview", label: "overview" },
              { id: "experience", label: "experience & portfolio" },
              { id: "gear", label: "gear & specs" },
              { id: "settings", label: "in-game settings" },
            ] as { id: Tab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition lowercase whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-emerald-400 text-emerald-400"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Sensitivity Table */}
              <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Mouse className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-sm font-semibold lowercase text-zinc-200">
                    in-game sensitivity
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profileData.sensitivities.map((item) => (
                    <div
                      key={item.game}
                      className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800/60 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs text-zinc-400">{item.game}</p>
                        <p className="text-base font-mono font-semibold text-zinc-100 mt-0.5">
                          {item.sens}
                        </p>
                      </div>
                      <div className="text-right text-xs text-zinc-500 font-mono">
                        <p>{item.dpi}</p>
                        {item.edpi && (
                          <p className="text-emerald-400/80">{item.edpi}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Game Roles */}
              <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Gamepad2 className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-sm font-semibold lowercase text-zinc-200">
                    competitive roles
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profileData.roles.map((r) => (
                    <div
                      key={r.game}
                      className="p-3.5 rounded-lg bg-zinc-950/70 border border-zinc-800/60"
                    >
                      <p className="text-sm font-medium text-zinc-200 mb-2">
                        {r.game}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {r.list.map((role) => (
                          <span
                            key={role}
                            className="px-2 py-0.5 text-xs rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Highlights */}
            <div className="space-y-6">
              <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <h2 className="text-sm font-semibold lowercase text-zinc-200">
                    notable milestones
                  </h2>
                </div>
                <div className="space-y-3">
                  {profileData.achievements.map((ach) => (
                    <a
                      key={ach.event}
                      href={ach.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg bg-zinc-950/70 hover:bg-zinc-900 border border-zinc-800/60 transition"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-amber-400">
                          {ach.placement}
                        </span>
                        <span className="text-zinc-500">{ach.date}</span>
                      </div>
                      <p className="text-sm font-medium text-zinc-200">
                        {ach.event}
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">{ach.org}</p>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}

        {/* TAB 2: EXPERIENCE & PORTFOLIO */}
        {activeTab === "experience" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Columns: Filterable Work Timeline */}
            <div className="lg:col-span-2 space-y-5">
              {/* Filter Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-sm font-semibold lowercase text-zinc-200">
                    work history ({filteredExperience.length})
                  </h2>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {(
                    [
                      { id: "all", label: "all roles" },
                      { id: "esports", label: "esports & events" },
                      { id: "corporate", label: "corporate & ops" },
                      { id: "media", label: "creative & media" },
                    ] as { id: FilterOption; label: string }[]
                  ).map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setExpFilter(filter.id)}
                      className={`px-2.5 py-1 rounded-md text-xs transition ${
                        expFilter === filter.id
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Cards */}
              <div className="space-y-3">
                {filteredExperience.map((job, idx) => (
                  <div
                    key={`${job.company}-${idx}`}
                    className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/80 transition"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-semibold text-zinc-100">
                            {job.role}
                          </h3>
                          {job.current && (
                            <span className="px-2 py-0.5 text-[11px] rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              active
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-emerald-400 font-medium mt-0.5">
                          {job.company}
                        </p>
                      </div>

                      <div className="text-left sm:text-right text-xs text-zinc-500">
                        <p className="font-mono text-zinc-400">{job.period}</p>
                        <p className="mt-0.5">
                          {job.type} • {job.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                      {job.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Summary, Skills, Education & Achievements */}
            <div className="space-y-6">
              {/* Executive Summary */}
              <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-sm font-semibold lowercase text-zinc-200">
                    profile summary
                  </h2>
                </div>
                <p className="text-xs font-medium text-emerald-400 mb-2">
                  {profileData.portfolioOverview.headline}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {profileData.portfolioOverview.bio}
                </p>

                <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                  <div>
                    <p className="text-xs text-zinc-500 mb-2">core competencies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {profileData.portfolioOverview.coreSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-[11px] rounded bg-zinc-950 text-zinc-300 border border-zinc-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500 mb-1.5 flex items-center gap-1">
                      <Globe className="w-3 h-3" /> languages
                    </p>
                    <p className="text-xs text-zinc-300">
                      {profileData.portfolioOverview.languages.join(" • ")}
                    </p>
                  </div>
                </div>
              </section>

              {/* Tournament Achievements */}
              <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <h2 className="text-sm font-semibold lowercase text-zinc-200">
                    esports achievements
                  </h2>
                </div>
                <div className="space-y-3">
                  {profileData.achievements.map((ach) => (
                    <a
                      key={ach.event}
                      href={ach.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3.5 rounded-lg bg-zinc-950/70 hover:bg-zinc-900 border border-zinc-800/60 transition"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-medium">
                          {ach.placement}
                        </span>
                        <span className="text-zinc-500">{ach.date}</span>
                      </div>
                      <p className="text-sm font-semibold text-zinc-100 mt-1.5">
                        {ach.event}
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">
                        {ach.org} • {ach.note}
                      </p>
                    </a>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-sm font-semibold lowercase text-zinc-200">
                    education
                  </h2>
                </div>
                <div className="space-y-3">
                  {profileData.education.map((edu) => (
                    <div
                      key={edu.school}
                      className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800/60"
                    >
                      <p className="text-xs font-semibold text-zinc-200">
                        {edu.school}
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5">{edu.level}</p>
                      <p className="text-[11px] text-zinc-500 mt-1">
                        {edu.period} • {edu.location}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}

        {/* TAB 3: GEAR & PC SPECS */}
        {activeTab === "gear" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Mouse className="w-4 h-4 text-emerald-400" />
                <h2 className="text-sm font-semibold lowercase text-zinc-200">
                  peripherals
                </h2>
              </div>
              <div className="divide-y divide-zinc-800/60">
                {profileData.peripherals.map((gear) => (
                  <div
                    key={gear.category}
                    className="py-3 flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="text-zinc-500">{gear.category}</span>
                    <span className="text-zinc-200 text-right font-medium">
                      {gear.item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <h2 className="text-sm font-semibold lowercase text-zinc-200">
                  pc specifications
                </h2>
              </div>
              <div className="divide-y divide-zinc-800/60">
                {profileData.pcSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="py-3 flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="text-zinc-500">{spec.label}</span>
                    <span className="text-zinc-200 text-right font-medium">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 4: VALORANT SETTINGS */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            {/* Crosshair Copy Box */}
            <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-sm font-semibold lowercase text-zinc-200">
                    valorant crosshair profile
                  </h2>
                </div>
                <button
                  onClick={copyCrosshair}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-medium transition"
                >
                  {copiedCrosshair ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> copy code
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 overflow-x-auto">
                {profileData.valorantSettings.crosshairCode}
              </pre>
            </section>

            {/* Mouse, Keybinds, Map */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
                <h3 className="text-sm font-semibold text-zinc-200 mb-3">
                  mouse
                </h3>
                <dl className="space-y-2.5 text-sm">
                  {Object.entries(profileData.valorantSettings.mouse).map(
                    ([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <dt className="text-zinc-500 lowercase">{k}</dt>
                        <dd className="font-mono text-zinc-200">{v}</dd>
                      </div>
                    )
                  )}
                </dl>
              </section>

              <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
                <h3 className="text-sm font-semibold text-zinc-200 mb-3">
                  keybinds
                </h3>
                <dl className="space-y-2.5 text-sm">
                  {profileData.valorantSettings.keybinds.map((bind) => (
                    <div key={bind.action} className="flex justify-between">
                      <dt className="text-zinc-500">{bind.action}</dt>
                      <dd className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-200">
                        {bind.key}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-5">
                <h3 className="text-sm font-semibold text-zinc-200 mb-3">
                  minimap
                </h3>
                <dl className="space-y-2.5 text-sm">
                  {Object.entries(profileData.valorantSettings.map).map(
                    ([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <dt className="text-zinc-500 lowercase">{k}</dt>
                        <dd className="font-mono text-zinc-200">{v}</dd>
                      </div>
                    )
                  )}
                </dl>
              </section>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}