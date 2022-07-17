import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";

const LoaderComponent = React.lazy(() => import("../components/Loader/Loader"));
const Navbar = React.lazy(() => import("../components/Navbar/Navbar"));
const Cart = React.lazy(() => import("../modules/Cart/Cart"));
const BooksView = React.lazy(() =>
	import("../modules/Books/BooksView/BooksView")
);
const Books = React.lazy(() => import("../modules/Books/Books"));

const Root = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<LoaderComponent />}>
							<Navbar />
						</Suspense>
					}>
					<Route
						index
						element={
							<Suspense fallback={<LoaderComponent />}>
								<Books />
							</Suspense>
						}
					/>
					<Route
						exact
						path="/book-view/:id"
						element={
							<Suspense fallback={<LoaderComponent />}>
								<BooksView />
							</Suspense>
						}
					/>
					<Route
						exact
						path="/cart"
						element={
							<Suspense fallback={<LoaderComponent />}>
								<Cart />
							</Suspense>
						}
					/>

					<Route exact path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Root;
