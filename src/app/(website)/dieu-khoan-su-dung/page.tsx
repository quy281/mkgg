export const metadata = {
    title: "Điều Khoản Sử Dụng | MKG - Minh Khuê Group",
    description: "Điều khoản sử dụng website mkg.vn - Công ty TNHH Kiến trúc & Nội thất Minh Khuê. Quy định về truy cập, nội dung và dịch vụ.",
    alternates: { canonical: '/dieu-khoan-su-dung' },
};

export default function DieuKhoanSuDungPage() {
    return (
        <div className="page-enter bg-[#0a0a0a] min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h1
                    className="text-4xl md:text-5xl font-bold text-white mb-8"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Điều Khoản <span className="text-[#c8a45c] italic font-light">Sử Dụng</span>
                </h1>
                <div className="w-16 h-px bg-[#c8a45c]/50 mb-12" />

                <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/70 font-light leading-relaxed">
                    <p className="text-white/40 text-sm">Cập nhật lần cuối: 16/03/2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            1. Giới thiệu
                        </h2>
                        <p>
                            Website mkg.vn thuộc sở hữu của Công ty TNHH Kiến trúc & Nội thất Minh Khuê. Khi truy cập và sử dụng website, bạn đồng ý tuân thủ các điều khoản dưới đây.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            2. Quyền sở hữu trí tuệ
                        </h2>
                        <p>
                            Toàn bộ nội dung trên website (hình ảnh, văn bản, thiết kế, logo) thuộc quyền sở hữu của Minh Khuê Group. Nghiêm cấm sao chép, sử dụng khi chưa được cho phép.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            3. Thông tin dịch vụ
                        </h2>
                        <p>
                            Thông tin sản phẩm, dịch vụ, giá và khuyến mãi trên website mang tính chất tham khảo. Vui lòng liên hệ trực tiếp để nhận báo giá chính xác.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            4. Giới hạn trách nhiệm
                        </h2>
                        <p>
                            Chúng tôi không chịu trách nhiệm về thiệt hại phát sinh từ việc sử dụng thông tin trên website cho mục đích ngoài tư vấn.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            5. Thay đổi điều khoản
                        </h2>
                        <p>
                            Minh Khuê Group có quyền thay đổi điều khoản bất cứ lúc nào mà không cần thông báo trước. Người dùng có trách nhiệm cập nhật thường xuyên.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            6. Liên hệ
                        </h2>
                        <div className="text-white/60 space-y-1">
                            <p className="font-medium text-white">Công ty TNHH Kiến trúc & Nội thất Minh Khuê</p>
                            <p>Số 8 đường 79, P. Tân Quy, Q7, TP.HCM</p>
                            <p>Email: fadifurnitures@gmail.com | SĐT: 0817.424.242</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
