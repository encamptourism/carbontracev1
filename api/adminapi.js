import axios from "axios";
export default axios.create({
	//baseURL:"https://fakestoreapi.com",
	baseURL:"https://backend.encampadventures.com/api/v1/",
      headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
}
})
