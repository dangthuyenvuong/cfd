# Ngay 13: Tối ưu dự án


## 1. Cache dữ liệu các trang bằng sessionStorage, khi refresh lại trang thì không thay đổi. Chỉ mất khi tắt tab
    sessionStorage.getItem(name: string, value: string) : Lấy dữ liệu
    sessionStorage.setItem( name: string ) : gán dữ liệu
## 1. Sử dụng useMemo cho header
## 2. Sử dụng useCallback cho paginate
## 3. Sử dụng useImperativeHandle cho Popup Search
## 4. Sử dụng useLayoutEffect cho các trường hợp setState liên tục
