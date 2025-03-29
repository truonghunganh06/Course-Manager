import Image from "next/image";
import Link from "next/link";

interface CourseCard {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  instructor: string;
  rating: number;
  students: number;
}

const courses: CourseCard[] = [
  {
    id: "1",
    title: "HTML, CSS từ Zero đến Hero",
    description: "Khóa học HTML, CSS từ cơ bản đến nâng cao cho người mới, không cần kinh nghiệm.",
    image: "/course-1.jpg",
    price: "Miễn phí",
    instructor: "Sơn Đặng",
    rating: 4.8,
    students: 1234
  },
  {
    id: "2",
    title: "JavaScript cơ bản",
    description: "Học JavaScript cơ bản qua thực hành, tự học frontend qua bài tập thực tế.",
    image: "/course-2.jpg",
    price: "Miễn phí",
    instructor: "Sơn Đặng",
    rating: 4.9,
    students: 2345
  },
  {
    id: "3",
    title: "ReactJS cơ bản",
    description: "Học ReactJS từ cơ bản đến nâng cao, làm việc với dự án thực tế.",
    image: "/course-3.jpg",
    price: "Miễn phí",
    instructor: "Sơn Đặng",
    rating: 4.7,
    students: 3456
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      {/* Hero Section */}
      <section className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Học Lập Trình Để Đi Làm</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          Học lập trình trực tuyến từ những người có kinh nghiệm. Không cần kinh nghiệm, không cần bằng cấp.
        </p>
      </section>

      {/* Featured Courses */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 px-4">Khóa học nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {courses.map((course) => (
            <Link 
              key={course.id} 
              href={`/khoa-hoc/${course.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40 sm:h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 sm:mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-orange-500 font-medium">{course.price}</span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-yellow-500">★</span>
                    <span>{course.rating}</span>
                    <span className="text-gray-500 hidden sm:inline">({course.students} học viên)</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Tại sao chọn chúng tôi?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
            <h3 className="font-semibold mb-2">Học thực tế</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Học qua dự án thực tế, có thể làm việc ngay sau khi học</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👨‍🏫</div>
            <h3 className="font-semibold mb-2">Giảng viên chất lượng</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Đội ngũ giảng viên có nhiều kinh nghiệm trong ngành</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💡</div>
            <h3 className="font-semibold mb-2">Cộng đồng sôi động</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Tham gia cộng đồng học viên đông đảo, hỗ trợ 24/7</p>
          </div>
        </div>
      </section>
    </div>
  );
}
