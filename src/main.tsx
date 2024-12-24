import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

// biome-ignore lint/style/noNonNullAssertion: index.htmlに存在することが保証されている
createRoot(document.getElementById("root")!).render(
	<div>
		<App />
	</div>,
)
