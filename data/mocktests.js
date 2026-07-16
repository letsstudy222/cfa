/* =====================================================================
   MOCK TESTS · ĐỀ THI THỬ
   ---------------------------------------------------------------------
   Thêm đề thi thử vào mảng window.CFA.mocktests bên dưới.
   Mỗi đề: { name: 'Tên đề', qs: [ ...câu hỏi... ] }
   Mỗi câu hỏi: {
     q:    'Nội dung câu hỏi (English, như đề thật)',
     opts: ['Đáp án A', 'Đáp án B', 'Đáp án C'],   // đúng 3 đáp án
     ans:  0,                                        // chỉ số đáp án đúng: 0, 1 hoặc 2
     en:   'Giải thích tiếng Anh',
     vi:   'Giải thích tiếng Việt'
   }
   Ví dụ (xóa dấu chú thích để dùng):
   window.CFA.mocktests.push({
     name: 'Mock Exam 1 — Session A',
     qs: [
       { q: 'Sample question?', opts: ['Choice A','Choice B','Choice C'], ans: 1,
         en: 'B is correct because…', vi: 'Đáp án B vì…' }
     ]
   });
   ===================================================================== */
window.CFA = window.CFA || { topics: [], extra: {}, mocktests: [] };
