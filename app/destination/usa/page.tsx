export default function USAPage() {
    return (
        <main className="h-[60vh] bg-background flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">USA</h1>
            <p className="mt-4 text-muted-foreground max-w-xl">
                Content for USA is coming soon. Please check back later or contact us for more information.
            </p>
            <a className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 rounded-md" href="/contact">Contact Us</a>

        </main>
    );
}
