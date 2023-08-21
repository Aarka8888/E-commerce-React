import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="max-w-6xl mx-auto pt-16 dark:text-gray-100 dark:bg-slate-900 duration-100">

		
			<Header />

			{/* dynamic page*/}
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;




