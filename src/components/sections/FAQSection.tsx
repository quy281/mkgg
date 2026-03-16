"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/JsonLd";

const faqs = [
    {
        question: "Chi phí thiết kế nội thất tại MKG bao nhiêu?",
        answer: "Chi phí thiết kế nội thất tại MKG dao động từ 150,000 - 500,000 VNĐ/m² tùy theo quy mô và yêu cầu dự án. Chúng tôi cung cấp tư vấn miễn phí ban đầu.",
    },
    {
        question: "Thời gian thi công nội thất bao lâu?",
        answer: "Thời gian thi công trung bình từ 45-90 ngày tùy quy mô công trình. Đối với căn hộ chung cư thường mất 45-60 ngày, biệt thự và nhà phố từ 60-90 ngày.",
    },
    {
        question: "MKG bảo hành nội thất như thế nào?",
        answer: "MKG cam kết bảo hành từ 2-5 năm tùy hạng mục. Đồ gỗ công trình bảo hành 5 năm, phụ kiện bảo hành 2 năm. Đội ngũ bảo trì phản hồi trong 24h.",
    },
    {
        question: "Vật liệu gỗ MKG sử dụng đạt tiêu chuẩn gì?",
        answer: "MKG sử dụng gỗ đạt tiêu chuẩn E1 (Low Formaldehyde), an toàn cho sức khỏe. Gỗ được nhập khẩu từ các nhà cung cấp uy tín có chứng nhận FSC.",
    },
    {
        question: "Quy trình làm việc tại MKG gồm mấy bước?",
        answer: "Quy trình 5 bước chuyên nghiệp: (1) Tư vấn & khảo sát → (2) Thiết kế 3D → (3) Báo giá chi tiết → (4) Thi công & giám sát → (5) Bàn giao & bảo hành.",
    },
    {
        question: "MKG có thiết kế theo phong thủy không?",
        answer: "Có, MKG có chuyên gia tư vấn phong thủy đồng hành trong quá trình thiết kế. Chúng tôi kết hợp yếu tố phong thủy vào thiết kế hiện đại, phù hợp mệnh gia chủ.",
    },
    {
        question: "MKG có hỗ trợ trả góp không?",
        answer: "MKG hỗ trợ trả góp qua các ngân hàng đối tác với lãi suất ưu đãi. Liên hệ hotline 0817.424.242 để được tư vấn phương án tài chính phù hợp.",
    },
    {
        question: "MKG phục vụ khu vực nào?",
        answer: "MKG chủ yếu phục vụ tại TP.HCM và các tỉnh lân cận như Bình Dương, Đồng Nai, Long An. Với các dự án lớn, chúng tôi có thể triển khai toàn quốc.",
    },
    {
        question: "Xem showroom MKG ở đâu?",
        answer: "Showroom MKG tại Số 8 đường 79, Phường Tân Quy, Quận 7, TP.HCM. Mở cửa Thứ 2 - Thứ 7. Vui lòng đặt lịch hẹn trước để được phục vụ tốt nhất.",
    },
    {
        question: "Làm sao để bắt đầu dự án với MKG?",
        answer: "Gọi Hotline 0817.424.242 hoặc điền form trên website. Đội ngũ tư vấn sẽ liên hệ trong 24h để lắng nghe nhu cầu và sắp xếp khảo sát miễn phí.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
        }
    }))
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
            <JsonLd data={faqSchema} />
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[#c8a45c] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">FAQ</p>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Câu Hỏi <span className="text-[#c8a45c] italic font-light">Thường Gặp</span>
                    </h2>
                    <div className="w-16 h-px bg-[#c8a45c]/50 mx-auto" />
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/5 hover:border-[#c8a45c]/20 transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className="text-[15px] font-medium text-white group-hover:text-[#c8a45c] transition-colors pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`text-[#c8a45c] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-60 pb-6" : "max-h-0"
                                    }`}
                            >
                                <p className="px-6 text-[14px] text-white/50 leading-relaxed font-light">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
