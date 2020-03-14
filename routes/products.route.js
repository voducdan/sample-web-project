const express = require('express');

const router = express.Router();
const productModel = require('../models/products.model');
router.get('/products', (req, res, next) => {
    const query = req.query;
    if (query) {
        productModel.find({}, (err, data) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(data);
        })
    }
    else {
        const category = query.categoty;
        productModel.find({ category }, (err, data) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(data);
        })
    }

})

router.get('/add', (req, res) => {
    const products = [
        {
            name: "Khung nắn chỉnh cột sống, điều trị thoát vị đĩa đệm, thoái hóa, đau lưng, vai gáy (Giao màu ngẫu nhiên)",
            cost: 109000,
            short_description: "Khung nắn chỉnh cột sống, điều trị thoát vị đĩa đệm, thoái hóa, đau lưng, vai gáy (Giao màu ngẫu nhiên)",
            image: "../../assets/khung.jpg",
            rating: 5,
            category: "doi-song",
            attributes: [
                { name: "Thương hiệu", value: 'OEM' },
                { name: 'Nơi sản xuất', value: "Trung Quốc" },
                { name: 'SKU', value: '1127985055784' },
                { name: 'Kích thước', value: '175 x 61 cm' }
            ],
            description: {
                value: [
                    'Khung nắn có độ cong lý tưởng cho người dùng một cách tự nhiên.',
                    'Khung nắn có thể chạm tới tối đa các huyệt đạo có trên lưng, đả thông huyệt, tăng cường tuần hoàn máu, làm bệnh mau thuyên giảm.',
                    'Hỗ trợ định hình cột sống về dạng tự nhiên ban đầu mà không cần phải tác động ngoại lực.',
                    'Hỗ trợ giảm đau một cách tự nhiên tại nhà.'
                ],
                note: 'Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ..'
            },
            date_created: new Date()
        },
        {
            name: "Thảm Tập YoGa miDoctor + Bao Thảm Tập Yoga + Dây Thảm Tập Yoga",
            cost: 58000,
            short_description: "Thảm Tập YoGa miDoctor + Bao Thảm Tập Yoga + Dây Thảm Tập Yoga",
            image: "../../assets/tham2.jpg",
            rating: 5,
            category: "doi-song",
            attributes: [
                { name: "Thương hiệu", value: 'miDoctor' },
                { name: 'Nơi sản xuất', value: "Trung Quốc" },
                { name: 'SKU', value: '7239853490109' },
            ],
            description: {
                value: [
                   
                ],
                note: 'Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ..'
            },
            date_created: new Date()
        },
        {
            name: "Bộ 2 Tạ Tập Tay Nhựa VN 5kg Sportslink - Xanh",
            cost: 58000,
            short_description: "Bộ 2 Tạ Tập Tay Nhựa VN 5kg Sportslink - Xanh",
            image: "../../assets/ta.jpg",
            rating: 5,
            category: "doi-song",
            attributes: [
                { name: "Thương hiệu", value: 'Sportslink' },
                { name: 'Nơi sản xuất', value: "Việt Nam" },
                { name: 'SKU', value: '1107442864364' },
            ],
            description: {
                value: [
                    'Bộ 2 Tạ Tập Tay Nhựa VN 5kg Sportslink - Xanh được làm nhựa cao cấp, cho độ bền tối ưu.',
                    'Phần tay tạ và quả tạ đúc liền khối, đảm bảo chắc chắn và an toàn khi tập.',
                    'Thiết kế các đường cong, giúp bạn luôn có cảm giác cầm nắm chắc chắn.'
                ],
                note: 'Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ..'
            },
            date_created: new Date()
        },
        {
            name: "Con lăn tập cơ bụng 4 bánh cao cấp",
            cost: 58000,
            short_description: "Con lăn tập cơ bụng 4 bánh cao cấp",
            image: "../../assets/bung.jpg",
            rating: 5,
            category: "doi-song",
            attributes: [
                { name: "Thương hiệu", value: 'OEM' },
                { name: 'Nơi sản xuất', value: "Trung Quốc" },
                { name: 'SKU', value: '7268615331404' },
            ],
            description: {
                value: [
                    'Thiết kế đơn giản; gọn nhẹ; dễ sử dụng, tập hiệu quả động hợp thời trang   ',
                    'Giảm mỡ bụng; nhanh chóng lấy lại vóc dáng thon gọn; săn chắc động hợp thời trang',
                    'Dễ dàng sử dụng với nhiều tư thế và thao tác cho sức khỏe dẻo dai; cơ bắp săn chắc; khỏe mạnh và thon gọn động hợp thời trang Phù hợp sử dụng cho tất cả mọi người'
                ],
                note: 'Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ..'
            },
            date_created: new Date()
        },
        {
            name: "Con lăn tập cơ bụng 4 bánh cao cấp",
            cost: 58000,
            short_description: "Con lăn tập cơ bụng 4 bánh cao cấp",
            image: "../../assets/bung.jpg",
            rating: 5,
            category: "doi-song",
            attributes: [
                { name: "Thương hiệu", value: 'OEM' },
                { name: 'Nơi sản xuất', value: "Trung Quốc" },
                { name: 'SKU', value: '7268615331404' },
            ],
            description: {
                value: [
                    'Thiết kế đơn giản; gọn nhẹ; dễ sử dụng, tập hiệu quả động hợp thời trang   ',
                    'Giảm mỡ bụng; nhanh chóng lấy lại vóc dáng thon gọn; săn chắc động hợp thời trang',
                    'Dễ dàng sử dụng với nhiều tư thế và thao tác cho sức khỏe dẻo dai; cơ bắp săn chắc; khỏe mạnh và thon gọn động hợp thời trang Phù hợp sử dụng cho tất cả mọi người'
                ],
                note: 'Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ..'
            },
            date_created: new Date()
        },
    ]
    productModel.insertMany(products, (err, data) => { });
    res.end(1);
})
module.exports = router;