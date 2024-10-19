import axios from "axios";

const getFoods = async (page, size) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api-restaurant/foods/find-all?page=${page}&size=${size}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching foods:", error);
    }
};

// Gọi API với trang 0 và 5 phần tử
getFoods(0, 5).then((data) => console.log(data));
