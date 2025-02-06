export default function func({children}: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        User page
        {children}
        </>
    )
}