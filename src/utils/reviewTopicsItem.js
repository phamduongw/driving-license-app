const fs = require('fs');

const a1 = [
  {
    title: 'Toàn bộ câu hỏi',
    icon: 'target',
    index: 8,
  },
  {
    title: 'Câu hỏi điểm liệt',
    icon: 'fire',
    index: 9,
  },

  {
    title: 'Khái niệm và quy tắc',
    icon: 'light',
    index: 10,
  },
  {
    title: 'Văn hóa và đạo đức',
    icon: 'human',
    index: 11,
  },
  {
    title: 'Kỹ thuật lái xe',
    icon: 'car',
    index: 12,
  },
  {
    title: 'Biển báo đường bộ',
    icon: 'sign',
    index: 13,
  },
  {
    title: 'Sa hình',
    icon: 'barrier',
    index: 14,
  },
];

const a2 = [
  {
    title: 'Toàn bộ câu hỏi',
    icon: 'target',
    index: 18,
  },
  {
    title: 'Câu hỏi điểm liệt',
    icon: 'fire',
    index: 19,
  },

  {
    title: 'Khái niệm và quy tắc',
    icon: 'light',
    index: 20,
  },
  {
    title: 'Văn hóa và đạo đức',
    icon: 'human',
    index: 21,
  },
  {
    title: 'Kỹ thuật lái xe',
    icon: 'car',
    index: 22,
  },
  {
    title: 'Cấu tạo và sửa chữa',
    icon: 'repair',
    index: 23,
  },
  {
    title: 'Biển báo đường bộ',
    icon: 'sign',
    index: 24,
  },
  {
    title: 'Sa hình',
    icon: 'barrier',
    index: 25,
  },
];

const a34 = [
  {
    title: 'Toàn bộ câu hỏi',
    icon: 'target',
    index: 20,
  },
  {
    title: 'Câu hỏi điểm liệt',
    icon: 'fire',
    index: 21,
  },

  {
    title: 'Khái niệm và quy tắc',
    icon: 'light',
    index: 22,
  },
  {
    title: 'Văn hóa và đạo đức',
    icon: 'human',
    index: 23,
  },
  {
    title: 'Kỹ thuật lái xe',
    icon: 'car',
    index: 24,
  },
  {
    title: 'Biển báo đường bộ',
    icon: 'sign',
    index: 25,
  },
  {
    title: 'Sa hình',
    icon: 'barrier',
    index: 26,
  },
];

const b1 = [
  {
    title: 'Toàn bộ câu hỏi',
    icon: 'target',
    index: 20,
  },
  {
    title: 'Câu hỏi điểm liệt',
    icon: 'fire',
    index: 21,
  },

  {
    title: 'Khái niệm và quy tắc',
    icon: 'light',
    index: 22,
  },
  {
    title: 'Văn hóa và đạo đức',
    icon: 'human',
    index: 23,
  },
  {
    title: 'Kỹ thuật lái xe',
    icon: 'car',
    index: 24,
  },
  {
    title: 'Cấu tạo và sửa chữa',
    icon: 'repair',
    index: 25,
  },
  {
    title: 'Biển báo đường bộ',
    icon: 'sign',
    index: 26,
  },
  {
    title: 'Sa hình',
    icon: 'barrier',
    index: 27,
  },
];

const b2 = [
  {
    title: 'Toàn bộ câu hỏi',
    icon: 'target',
    index: 18,
  },
  {
    title: 'Câu hỏi điểm liệt',
    icon: 'fire',
    index: 19,
  },

  {
    title: 'Khái niệm và quy tắc',
    icon: 'light',
    index: 20,
  },
  {
    title: 'Nghiệp vụ vận tải',
    icon: 'truck',
    index: 21,
  },
  {
    title: 'Văn hóa và đạo đức',
    icon: 'human',
    index: 22,
  },
  {
    title: 'Kỹ thuật lái xe',
    icon: 'car',
    index: 23,
  },
  {
    title: 'Cấu tạo và sửa chữa',
    icon: 'repair',
    index: 24,
  },
  {
    title: 'Biển báo đường bộ',
    icon: 'sign',
    index: 25,
  },
  {
    title: 'Sa hình',
    icon: 'barrier',
    index: 26,
  },
];

const c = [
  {
    title: 'Toàn bộ câu hỏi',
    icon: 'target',
    index: 15,
  },
  {
    title: 'Câu hỏi điểm liệt',
    icon: 'fire',
    index: 16,
  },

  {
    title: 'Khái niệm và quy tắc',
    icon: 'light',
    index: 17,
  },
  {
    title: 'Nghiệp vụ vận tải',
    icon: 'truck',
    index: 18,
  },
  {
    title: 'Văn hóa và đạo đức',
    icon: 'human',
    index: 19,
  },
  {
    title: 'Kỹ thuật lái xe',
    icon: 'car',
    index: 20,
  },
  {
    title: 'Cấu tạo và sửa chữa',
    icon: 'repair',
    index: 21,
  },
  {
    title: 'Biển báo đường bộ',
    icon: 'sign',
    index: 22,
  },
  {
    title: 'Sa hình',
    icon: 'barrier',
    index: 23,
  },
];

const def = [
  {
    title: 'Toàn bộ câu hỏi',
    icon: 'target',
    index: 14,
  },
  {
    title: 'Câu hỏi điểm liệt',
    icon: 'fire',
    index: 15,
  },

  {
    title: 'Khái niệm và quy tắc',
    icon: 'light',
    index: 16,
  },
  {
    title: 'Nghiệp vụ vận tải',
    icon: 'truck',
    index: 17,
  },
  {
    title: 'Văn hóa và đạo đức',
    icon: 'human',
    index: 18,
  },
  {
    title: 'Kỹ thuật lái xe',
    icon: 'car',
    index: 19,
  },
  {
    title: 'Cấu tạo và sửa chữa',
    icon: 'repair',
    index: 20,
  },
  {
    title: 'Biển báo đường bộ',
    icon: 'sign',
    index: 21,
  },
  {
    title: 'Sa hình',
    icon: 'barrier',
    index: 22,
  },
];

const result = [a1, a2, a34, b1, b2, c, def];

fs.writeFile('./reviewTopics.json', JSON.stringify(result), err => {
  if (err) {
    console.error(err);
  }
});
