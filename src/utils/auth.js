export const saveAuthData = (data) => {
    // Simpan data login ke sessionStorage
    sessionStorage.setItem("authData", JSON.stringify(data));
  };
  
  export const getAuthData = () => {
    // Ambil data login dari sessionStorage
    const data = sessionStorage.getItem("authData");
    return data ? JSON.parse(data) : null;
  };
  
  export const clearAuthData = () => {
    // Hapus data login dari sessionStorage
    sessionStorage.removeItem("authData");
  };
  