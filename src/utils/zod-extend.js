import { z } from 'zod';

const getInvalidTypeMessage = (issue, ctx) => {
  switch (issue.expected) {
    case 'string':
      if (['undefined', 'null'].includes(issue.received)) {
        return '必填';
      } else {
        return '格式錯誤';
      }
    case 'number':
      // 要數字卻給empty也當成不可為空
      if (['undefined', 'null', 'nan'].includes(issue.received) || ctx.data === '') {
        return '必填';
      } else {
        return '格式錯誤';
      }
    case 'integer':
      if (['float'].includes(issue.received) || ctx.data === '') {
        return '僅能輸入整數';
      }
      break;
    case 'date':
      if (['undefined', 'null'].includes(issue.received)) {
        return '必填';
      } else {
        return '不符合日期格式';
      }
  }
  return null;
};

const getTooSmallMessage = (issue, ctx) => {
  switch (issue.type) {
    case 'string':
      return '必填';
    case 'number':
      if (issue.inclusive) {
        return `必須大於或等於${issue.minimum}`;
      } else {
        return `必須大於${issue.minimum}`;
      }
    case 'array': // 陣列沒選
      if (issue.minimum === 1) {
        return '必填';
      } else {
        return `至少要選${issue.minimum}個項目`;
      }
  }
  return null;
};

const getTooBigMessage = (issue, ctx) => {
  switch (issue.type) {
    case 'string':
      return `內容超過${issue.maximum}長度限制`;
    case 'number':
      if (issue.inclusive) {
        return `必須小於或等於${issue.maximum}`;
      } else {
        return `必須小於${issue.maximum}`;
      }
  }
  return null;
};

const getInvalidStringMessage = (issue, ctx) => {
  switch (issue.validation) {
    case 'email':
      return 'email格式錯誤';
  }
  return null;
};

export const customErrorMap = (issue, ctx) => {
  // 處理必填錯誤
  if (ctx.defaultError === 'Required') return { message: '必填' };

  // 錯誤類型對應表
  const errorHandlers = {
    [z.ZodIssueCode.invalid_type]: getInvalidTypeMessage,
    [z.ZodIssueCode.too_small]: getTooSmallMessage,
    [z.ZodIssueCode.too_big]: getTooBigMessage,
    [z.ZodIssueCode.invalid_string]: getInvalidStringMessage,
  };

  // 取得對應的錯誤訊息
  let message = errorHandlers[issue.code]?.(issue, ctx);
  if (!message) {
    // 找不到代表未定義，需補上
    console.log('unhandled validation', issue, ctx);
    message = ctx.defaultError;
  }
  return { message };
};
