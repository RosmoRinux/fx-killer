"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CandidateRequirements() {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-20">
      {/* 不适合人群 */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 border-y-2 border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              {t('unsuitable.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('unsuitable.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-black border-2 border-red-500 dark:border-red-600 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 dark:bg-red-600 flex items-center justify-center text-white text-2xl font-bold">
                  ✗
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                    {t('unsuitable.pressure')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('unsuitable.pressure.desc')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-black border-2 border-red-500 dark:border-red-600 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 dark:bg-red-600 flex items-center justify-center text-white text-2xl font-bold">
                  ✗
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                    {t('unsuitable.gambler')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('unsuitable.gambler.desc')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 对候选人的期望 */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              {t('expectations.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('expectations.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 border-2 border-green-500 dark:border-green-600 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-center mb-4">
                <div className="inline-flex w-16 h-16 bg-green-500 dark:bg-green-600 items-center justify-center text-white text-3xl font-bold mb-4">
                  ✓
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center text-black dark:text-white">
                {t('expectations.mindset')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {t('expectations.mindset.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 border-2 border-green-500 dark:border-green-600 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-center mb-4">
                <div className="inline-flex w-16 h-16 bg-green-500 dark:bg-green-600 items-center justify-center text-white text-3xl font-bold mb-4">
                  ✓
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center text-black dark:text-white">
                {t('expectations.stable')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {t('expectations.stable.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 border-2 border-green-500 dark:border-green-600 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-center mb-4">
                <div className="inline-flex w-16 h-16 bg-green-500 dark:bg-green-600 items-center justify-center text-white text-3xl font-bold mb-4">
                  ✓
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center text-black dark:text-white">
                {t('expectations.initiative')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {t('expectations.initiative.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 考察重点 */}
      <section className="py-12 bg-black dark:bg-white text-white dark:text-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('assessment.title')}
            </h2>
            <p className="text-gray-300 dark:text-gray-700">
              {t('assessment.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { key: 'learning', icon: '📚' },
              { key: 'understanding', icon: '🧠' },
              { key: 'execution', icon: '⚡' },
              { key: 'mentality', icon: '🎯' },
              { key: 'motivation', icon: '💪' }
            ].map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 dark:bg-black/10 border-2 border-white/20 dark:border-black/20 p-6 text-center hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">
                  {t(`assessment.${item.key}`)}
                </h3>
                <p className="text-sm text-gray-300 dark:text-gray-700 leading-relaxed">
                  {t(`assessment.${item.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
