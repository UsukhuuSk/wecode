import { toast } from 'react-toastify';

export class Helper {

  static handleSuccess(message?: any, options?: any) {
    return toast.success(message ? message : "Амжилттай.", {
      position: options?.position || "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: options?.theme || "colored",
    });
  }

  static handleInfo(message?: any, options?: any) {
    return toast.info(message ? message : "Амжилттай.", {
      position: options?.position || "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: options?.theme || "colored",
    });
  }

  static handleWarning(message?: any) {
    return toast.warning(message ? message : "Анхаар.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  static handleError(error?: any) {
    return toast.error(error ? error : "Cannot continue this action.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }


  static wait(ms?: number) {
    return new Promise(resolve => setTimeout(resolve, ms ? ms : 200));
  }

  static isEmptyList(data: any) {
    return !data || data && data.length === 0
  }

  static isNotEmptyList(data: any) {
    return data && data.length > 0
  }

  static formatCurrency(amount: number) {
    if (amount === undefined || amount === null || isNaN(amount)) {
      return '0₮';
    }

    const formattedCurrency = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

    return formattedCurrency + '₮';
  }

}