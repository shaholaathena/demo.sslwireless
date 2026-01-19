'use client'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const certifications = [
    {
        id: 'pci-dss',
        title: 'PCI DSS v3.2.1',
        category: 'Information Security',
        description: 'SSL Wireless is the first and largest Merchant Solution Provider (MSP) in the country, maintaining the highest globally recognized rating for payment data security.',
        color: 'cyan'
    },
    {
        id: 'cmmi',
        title: 'CMMI-DEV v1.3 Level 3',
        category: 'Process Excellence',
        description: 'Appraised at Level 3 of the CMMI Institute’s Capability Maturity Model Integration for Development, ensuring excellence in software development and quality assurance.',
        color: 'blue'
    },
    {
        id: 'iso-27001',
        title: 'ISO/IEC 27001:2013',
        category: 'Security Management',
        description: 'Certified for international standards in information security, affirming our commitment to data protection and service quality through strict compliance.',
        color: 'indigo'
    },
    {
        id: 'tvas',
        title: 'TVAS Registration',
        category: 'Telecommunication',
        description: 'Recipient of the Registration Certificate for Telecommunication Value Added Services (TVAS) from the Bangladesh Telecommunication Regulatory Commission (BTRC).',
        color: 'emerald'
    },
    {
        id: 'pso-license',
        title: 'PSO License',
        category: 'Fintech Authorization',
        description: 'Authorized and licensed by Bangladesh Bank with a Payment Systems Operator (PSO) license for implementing secure controls and regulatory compliance.',
        color: 'blue'
    }
]

export default function OurCertifications() {
    useSmoothScroll()

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#2D499A] text-white">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-blue-200 uppercase tracking-widest font-semibold mb-4"
                    >
                        About Us
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-normal mb-8"
                    >
                        Our <span className="font-serif italic text-blue-200">Certifications</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
                    >
                        From a team of passionate builders working side-by-side with our partners in delivering compliant and certified services to our clients.
                    </motion.p>
                </div>
                {/* Abstract decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
            </section>

            {/* Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <svg className="w-24 h-24 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div className="text-xs font-bold tracking-[0.2em] text-[#2D499A] uppercase mb-6">{cert.category}</div>
                                <h3 className="text-3xl font-normal text-gray-900 mb-6 font-serif italic">{cert.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg mb-8">{cert.description}</p>
                                <div className="flex items-center text-[#2D499A] font-semibold group-hover:gap-2 transition-all cursor-pointer">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
