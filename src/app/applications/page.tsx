import RequireAuth from "@/components/require-auth";
import ApplicationListContent from "@/components/application-list-content";

export default function ApplicationsPage() {
  return (
    <RequireAuth returnTo="/applications">
      <ApplicationListContent />
    </RequireAuth>
  );
}
