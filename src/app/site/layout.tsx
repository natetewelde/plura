import Navigation from "@/components/site/navigation";

type Props = {
	children: React.ReactNode;
};

const SiteLayout = ({ children }: Props) => {
	return <main className="h-full">
        <Navigation />
        {children}
    </main>;
};

export default SiteLayout;
