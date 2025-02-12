// 等级规则数据
const gradeRules = [
  // G系列
  { grade: 'G1', length: { min: 34.5 }, fineness: { max: 15 } },
  { grade: 'G2', length: { min: 32, max: 34.5 }, fineness: { max: 15 } },
  { grade: 'G3', length: { min: 28, max: 30 }, fineness: { max: 15 } },
  { grade: 'G4', length: { min: 28, max: 30 }, fineness: { max: 15 } },
  { grade: 'G5', length: { min: 26, max: 28 }, fineness: { max: 15 } },
  { grade: 'G6', length: { min: 26, max: 28 }, fineness: { max: 15 } },

  // J系列
  { grade: 'J0', length: { min: 34.5 }, fineness: { min: 15.0, max: 15.2 } },
  { grade: 'J1', length: { min: 34.5 }, fineness: { min: 15.2, max: 15.6 } },
  { grade: 'J2', length: { min: 34.5 }, fineness: { min: 15.6, max: 16.0 } },
  { grade: 'J3', length: { min: 33.5, max: 34.5 }, fineness: { min: 16.3, max: 16.6 } },
  { grade: 'J4', length: { min: 34.5 }, fineness: { min: 16.0, max: 16.2 } },
  { grade: 'J5', length: { min: 34.5 }, fineness: { min: 16.2, max: 16.5 } },

  // A系列
  { grade: 'A00', length: { min: 34.0, max: 34.5 }, fineness: { min: 15.2, max: 15.6 } },
  { grade: 'A01', length: { min: 32, max: 34 }, fineness: { min: 15.2, max: 15.6 } },
  { grade: 'A02', length: { min: 32, max: 33.5 }, fineness: { min: 15.6, max: 15.8 } },
  { grade: 'A03', length: { min: 31.5, max: 33 }, fineness: { min: 15.8, max: 16.0 } },
  { grade: 'A04', length: { min: 31.5, max: 33 }, fineness: { min: 16.0, max: 16.3 } },
  { grade: 'A05', length: { min: 31.5, max: 33.5 }, fineness: { min: 16.3, max: 16.5 } },
  { grade: 'A06', length: { min: 30, max: 31.5 }, fineness: { min: 16.5, max: 16.8 } },
  { grade: 'A07', length: { min: 30, max: 33 }, fineness: { min: 16.8, max: 17.6 } },

  // B系列
  { grade: 'B1', length: { min: 30, max: 31.5 }, fineness: { min: 15.8, max: 16.0 } },
  { grade: 'B2', length: { min: 28, max: 30 }, fineness: { min: 15.8, max: 16.0 } },
  { grade: 'B3', length: { min: 26, max: 30 }, fineness: { min: 16.0, max: 16.5 } },
  { grade: 'B4', length: { min: 26, max: 28 }, fineness: { min: 15.8, max: 16.0 } },
  { grade: 'B5', length: { min: 26, max: 28 }, fineness: { min: 16.0, max: 16.5 } },
  { grade: 'B6', length: { min: 30 }, fineness: { min: 16.6, max: 17.2 } },
  { grade: 'B7', length: { min: 28, max: 30 }, fineness: { min: 16.5, max: 16.8 } },

  // C系列
  { grade: 'C1', length: { min: 34.5 }, fineness: { min: 16.5, max: 16.6 } },
  { grade: 'C2', length: { min: 30 }, fineness: { min: 17.2 } },
  { grade: 'C3', length: { min: 34, max: 34.5 }, fineness: { min: 15.0, max: 15.2 } },
  { grade: 'C4', length: { min: 34, max: 34.5 }, fineness: { min: 15.6, max: 15.8 } },
  { grade: 'C5', length: { min: 34, max: 34.5 }, fineness: { min: 15.8, max: 16.3 } },
  { grade: 'C6', length: { min: 33.5, max: 34 }, fineness: { min: 15.6, max: 15.8 } },
  { grade: 'C7', length: { min: 33.5, max: 34 }, fineness: { min: 15.8, max: 16 } },
  { grade: 'C8', length: { min: 33.0, max: 34 }, fineness: { min: 16.0, max: 16.3 } },
  { grade: 'C9', length: { min: 33, max: 33.5 }, fineness: { min: 15.8, max: 16 } },
  { grade: 'C10', length: { min: 33, max: 33.5 }, fineness: { min: 16.5, max: 16.6 } },
  { grade: 'C11', length: { min: 30, max: 32 }, fineness: { max: 15.2 } },
  { grade: 'C12', length: { min: 32, max: 34 }, fineness: { min: 15.0, max: 15.2 } },
  { grade: 'C13', length: { min: 31.5, max: 33 }, fineness: { min: 16.5 } },
  { grade: 'C14', length: { min: 30, max: 32 }, fineness: { min: 15.2, max: 15.5 } },
  { grade: 'C15', length: { min: 30, max: 32 }, fineness: { min: 15.5, max: 15.8 } },
  { grade: 'C16', length: { min: 30, max: 31.5 }, fineness: { min: 16.0, max: 16.5 } },
  { grade: 'C17', length: { min: 30, max: 33 }, fineness: { min: 17.6 } },
  { grade: 'C18', length: { min: 28, max: 30 }, fineness: { min: 16.8 } },
  { grade: 'C19', length: { min: 26, max: 30 }, fineness: { min: 15.0, max: 15.2 } },
  { grade: 'C20', length: { min: 26, max: 30 }, fineness: { min: 15.2, max: 15.8 } },
  { grade: 'C21', length: { min: 26, max: 28 }, fineness: { min: 16.5 } },
  { grade: 'C22', length: { min: 24, max: 26 }, fineness: { max: 14 } },
  { grade: 'C23', length: { min: 24, max: 26 }, fineness: { min: 14, max: 14.5 } },
  { grade: 'C24', length: { min: 24, max: 26 }, fineness: { min: 14.5, max: 15 } },
  { grade: 'C25', length: { min: 24, max: 26 }, fineness: { min: 15.0, max: 15.2 } },
  { grade: 'C26', length: { min: 24, max: 26 }, fineness: { min: 15.2, max: 16 } },
  { grade: 'C27', length: { min: 24, max: 26 }, fineness: { min: 16.0 } },
  { grade: 'C28', length: { min: 20, max: 24 } },
  { grade: 'C29', length: { max: 20 } },
  { grade: 'C30' },
  { grade: 'C31', length: { min: 30 }, fineness: { max: 16.5 } },
  { grade: 'C32', length: { min: 30 }, fineness: { min: 16.5 } },
  { grade: 'C33', length: { max: 30 }, fineness: { max: 16.5 } },
  { grade: 'C34', length: { max: 30 }, fineness: { min: 16.5 } },
  { grade: 'C35', length: { max: 30 } },
  { grade: 'C36', length: { min: 30, max: 32 } },
  { grade: 'C37', length: { min: 32 } },
  { grade: 'C38', fineness: { max: 17 } },
  { grade: 'C39', fineness: { min: 17 } },
  { grade: 'C40', length: { max: 30 } },
  { grade: 'C41', length: { min: 30 } },
  { grade: 'C42' },
  { grade: 'C43' }
];

// 判断等级的函数
function determineGrade(length, fineness) {
  for (const rule of gradeRules) {
    let lengthMatch = false;
    let finenessMatch = false;
    
    // 检查长度
    if (!rule.length) {
      lengthMatch = true;
    } else if (rule.length.min !== undefined && rule.length.max !== undefined) {
      lengthMatch = length >= rule.length.min && length < rule.length.max;
    } else if (rule.length.min !== undefined) {
      lengthMatch = length >= rule.length.min;
    } else if (rule.length.max !== undefined) {
      lengthMatch = length < rule.length.max;
    }
    
    // 检查细度
    if (!rule.fineness) {
      finenessMatch = true;
    } else if (rule.fineness.min !== undefined && rule.fineness.max !== undefined) {
      finenessMatch = fineness > rule.fineness.min && fineness <= rule.fineness.max;
    } else if (rule.fineness.min !== undefined) {
      finenessMatch = fineness > rule.fineness.min;
    } else if (rule.fineness.max !== undefined) {
      finenessMatch = fineness <= rule.fineness.max;
    }
    
    if (lengthMatch && finenessMatch) {
      return rule.grade;
    }
  }
  return '未找到匹配等级';
} 