export const fetchKostList = async () => {
    const response = await fetch("/api/kost");
    const data = await response.json();
    return data;
};
