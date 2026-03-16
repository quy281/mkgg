export const metadata = {
    title: "Chính Sách Bảo Mật | MKG - Minh Khuê Group",
    description: "Chính sách bảo mật thông tin cá nhân của Công ty TNHH Kiến trúc & Nội thất Minh Khuê (MKG). Cam kết bảo vệ thông tin khách hàng.",
    alternates: { canonical: '/chinh-sach-bao-mat' },
};

export default function ChinhSachBaoMatPage() {
    return (
        <div className="page-enter bg-[#0a0a0a] min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h1
                    className="text-4xl md:text-5xl font-bold text-white mb-8"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Chính Sách <span className="text-[#c8a45c] italic font-light">Bảo Mật</span>
                </h1>
                <div className="w-16 h-px bg-[#c8a45c]/50 mb-12" />

                <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/70 font-light leading-relaxed">
                    <p className="text-white/40 text-sm">Cập nhật lần cuối: 16/03/2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            1. Thông tin thu thập
                        </h2>
                        <p>
                            Chúng tôi thu thập họ tên, số điện thoại, email, địa chỉ khi bạn yêu cầu tư vấn hoặc báo giá tại mkg.vn.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            2. Mục đích sử dụng
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-white/60">
                            <li>Liên hệ tư vấn và báo giá</li>
                            <li>Gửi thông tin khuyến mãi (nếu đồng ý)</li>
                            <li>Cải thiện dịch vụ</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            3. Bảo mật
                        </h2>
                        <p>
                            Thông tin được bảo mật theo quy định pháp luật Việt Nam. Không chia sẻ với bên thứ ba.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            4. Cookies
                        </h2>
                        <p>
                            Website sử dụng cookies (Google Analytics). Bạn có thể tắt trong trình duyệt.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            5. Liên hệ
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
