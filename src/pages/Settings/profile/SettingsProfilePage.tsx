import { Separator } from "../../../registry/ui/separator"
import { ProfileForm } from "./ProfileForm"

export default function SettingsProfilePage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    Update your profile settings.
                </p>
            </div>
            <Separator />
            <ProfileForm />
        </div>
    )
}