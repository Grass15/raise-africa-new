import RenderOnConnection from "../../components/RenderOnConnection";
// @ts-ignore
export default function Layout({ children }) {
  return (
    <RenderOnConnection>
      <main>{children}</main>
    </RenderOnConnection>
  );
}
