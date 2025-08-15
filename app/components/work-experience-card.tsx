"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Code, Trophy } from "lucide-react"
import type { WorkExperience } from "@/public/data"

interface WorkExperienceCardProps {
    job: WorkExperience
    index: number
  }

  export const WorkExperienceCard = ({ job, index }: WorkExperienceCardProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group h-full"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 h-full hover:border-blue-400/40 hover:bg-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          {/* Header */}
          <div className="mb-4 relative z-10">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {job.title}
            </h3>

            <div className="flex items-center text-slate-200 mb-2">
              <Briefcase className="w-4 h-4 mr-2 flex-shrink-0 text-blue-400" />
              <span className="font-medium">{job.company}</span>
            </div>

            <div className="flex items-center text-slate-300 text-sm mb-3">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{job.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-200 text-sm leading-relaxed mb-4 relative z-10">{job.description}</p>

          {/* Technologies */}
          {job.technologies && job.technologies.length > 0 && (
            <div className="mb-4 relative z-10">
              <div className="flex items-center text-sm text-slate-300 mb-2">
                <Code className="w-4 h-4 mr-2" />
                <span>Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-2 py-1 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {job.achievements && job.achievements.length > 0 && (
            <div className="mb-4 relative z-10">
              <div className="flex items-center text-sm text-slate-300 mb-2">
                <Trophy className="w-4 h-4 mr-2" />
                <span>Key Achievements</span>
              </div>
              <ul className="text-sm text-slate-200 space-y-1">
                {job.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-white/20 relative z-10">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-slate-300">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  {job.startDate} - {job.endDate}
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                <span className="text-slate-200 font-medium">{job.daysWorked} days</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
