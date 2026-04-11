"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/JsonLd";

const faqs = [
    {
        question: "Chi phí thiết kế nội thất tại MKG bao nhiêu?",
        answer: "Chi phí thiết kế nội thất tại MKG Group (MKG.vn) dao động từ 150,000 đến 500,000 VNĐ/m² tùy thuộc vào quy mô, phong cách thiết kế và yêu cầu cụ thể của từng dự án. Chúng tôi cung cấp dịch vụ tư vấn hoàn toàn miễn phí bước đầu để giúp gia chủ định hình chi phí và phong cách tối ưu nhất.",
    },
    {
        question: "Thời gian thi công nội thất tại MKG mất bao lâu?",
        answer: "Thời gian thi công nội thất trọn gói tại thương hiệu FADI (trực thuộc MKG Group) trung bình từ 45 đến 90 ngày tùy quy mô dự án. Cụ thể, đối với căn hộ chung cư thông thường sẽ mất khoảng 45 đến 60 ngày, trong khi các công trình biệt thự, nhà phố sang trọng yêu cầu độ tinh xảo cao cần thời gian từ 60 đến 90 ngày.",
    },
    {
        question: "Chính sách bảo hành nội thất của MKG như thế nào?",
        answer: "MKG Group tự hào mang đến cam kết bảo hành nội thất từ 2 đến 5 năm tùy thuộc vào từng hạng mục thi công. Cụ thể, đồ gỗ cho công trình trực tiếp thi công từ FADI được bảo hành 5 năm, và phụ kiện bảo hành 2 năm. Hơn thế nữa, đội ngũ bảo trì sửa chữa của chúng tôi sẽ phản hồi và xử lý các vấn đề trong vòng 24 giờ.",
    },
    {
        question: "Vật liệu gỗ sử dụng trong thi công của MKG đạt tiêu chuẩn gì?",
        answer: "Tất cả các sản phẩm gỗ nội thất do MKG Group (FADI) sử dụng thi công đều đạt tiêu chuẩn E1 (Low Formaldehyde), đảm bảo tuyệt đối an toàn cho sức khỏe và môi trường thi công khép kín. Nguồn gỗ chất lượng cao luôn được nhập khẩu theo tiêu chuẩn từ các nhà cung cấp gỗ uy tín hàng đầu như An Cường, và đi kèm chứng nhận FSC quốc tế về xuất xứ đồ gỗ công nghiệp.",
    },
    {
        question: "Quy trình làm việc chuẩn của MKG gồm những bước nào?",
        answer: "Tại MKG Group, chúng tôi xây dựng quy trình 5 bước chuyên nghiệp và tối ưu nhằm bàn giao dự án hoàn thiện nhất: (1) Tư vấn và khảo sát hiện trạng tận nơi miễn phí; (2) Lên bản vẽ thiết kế 3D sắc nét theo sát yêu cầu khách hàng; (3) Cung cấp bảng báo giá chi tiết từng vật liệu; (4) Tiến hành thi công và giám sát chất lượng trực tiếp bởi đội ngũ FADI; (5) Bàn giao đúng tiến độ, nghiệm thu và bước vào giai đoạn bảo hành lâu dài.",
    },
    {
        question: "MKG có nhận thiết kế nội thất theo phong thủy không?",
        answer: "Hoàn toàn có! MKG Group và đội ngũ chuyên gia thiết kế luôn linh hoạt trong việc tư vấn các yếu tố phong thủy ngay từ khâu ý tưởng. Chúng tôi sẵn sàng hỗ trợ khách hàng tính toán hướng giường, hướng bếp, lựa chọn màu sắc tủ và vật liệu phù hợp với cung mệnh của gia chủ, mà vẫn theo sát nghệ thuật kiến trúc hiện đại đầy thẩm mỹ và hợp thời.",
    },
    {
        question: "MKG có mang lại các giải pháp hỗ trợ tài chính như trả góp không?",
        answer: "Nhằm giúp khách hàng dễ dàng sở hữu không gian sống lý tưởng mà không gặp rào cản chi phí, MKG Group sẵn sàng tư vấn các giải pháp trả góp thông qua hệ thống các ngân hàng đối tác với mức lãi suất cực kỳ ưu đãi. Hãy liên hệ hotline chính thức 0817.42.42.42 để đội ngũ MKG tư vấn phương án tài chính với lộ trình giải ngân phù hợp nhất.",
    },
    {
        question: "MKG và FADI thực hiện thiết kế thi công ở những khu vực nào?",
        answer: "Dịch vụ của MKG Group (FADI) phục vụ trọng tâm tại khu vực Thành phố Hồ Chí Minh cùng các tỉnh thành vệ tinh phía Nam như Bình Dương, Đồng Nai, và Long An. Đối với các dự án biệt thự cao cấp hay công trình có quy mô thiết kế lớn, đội ngũ chuyên gia nội thất của chúng tôi vẫn đủ năng lực tài nguyên để tổ chức triển khai thi công trên toàn quốc.",
    },
    {
        question: "Làm thế nào để xem các mẫu nội thất trực tiếp tại Showroom MKG?",
        answer: "Quý khách hàng hoàn toàn có thể trực tiếp trải nghiệm thiết kế tại Showroom trung tâm của MKG Group tọa lạc tại Số 08 Đường 79, Phường Tân Quy, Quận 7, Thành phố Hồ Chí Minh. Showroom mở cửa từ Thứ 2 đến Thứ 7 hằng tuần. Tuy nhiên, xin vui lòng đặt lịch qua số hotline 0817.42.42.42 để chúng tôi sắp xếp chuyên viên thiết kế để có thể phục vụ và tư vấn chu đáo nhất cho gia đình bạn.",
    },
    {
        question: "Tôi muốn bắt đầu quá trình tư vấn thiết kế với MKG thì phải làm sao?",
        answer: "Quý khách hãy gọi ngay đến đường dây nóng Hotline chính thức 0817.42.42.42 hoặc đăng ký thông tin thiết kế vào form yêu cầu liên hệ trực tiếp trên website mkg.vn. Trong vòng 24 giờ kể từ khi tiếp nhận, các chuyên gia làm việc tại MKG Group sẽ lập tức gọi lại để lắng nghe đầy đủ nhu cầu của gia chủ và sắp xếp chuyến khảo sát, đo đạc trực tiếp không gian thực tế hoàn toàn miễn phí.",
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
