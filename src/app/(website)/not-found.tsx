import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                <p
                    className="text-[120px] md:text-[180px] font-bold text-[#c8a45c]/10 leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    404
                </p>
                <h1
                    className="text-3xl md:text-4xl font-bold text-white -mt-8 mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Trang không <span className="text-[#c8a45c] italic font-light">tồn tại</span>
                </h1>
                <p className="text-white/50 text-[15px] font-light mb-10">
                    Xin lỗi, trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển. Vui lòng quay lại trang chủ hoặc liên hệ với chúng tôi.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/"
                        className="bg-[#c8a45c] text-black px-8 py-4 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
                    >
                        Trang chủ
                    </Link>
                    <Link
                        href="/lien-he"
                        className="border border-white/20 text-white px-8 py-4 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300"
                    >
                        Liên hệ
                    </Link>
                </div>
            </div>
        </div>
    );
}
