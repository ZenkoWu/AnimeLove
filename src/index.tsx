import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StoreProvider } from './redux/StoreProvider';
import App from "./App";

const root = createRoot(document.getElementById('root')  as Element);
root.render(
	<StrictMode>
		<StoreProvider>
			<App />
		</StoreProvider>
	</StrictMode>
);