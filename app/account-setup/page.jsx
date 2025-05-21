import { redirect } from "next/navigation";

export default function AccountSetupRedirectPage() {
  redirect("/account-setup/company-info");
}
