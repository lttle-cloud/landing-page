export const metadata = {
    title: "Blog | lttle.cloud",
    description: "Learn more about our company and mission",
};

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
