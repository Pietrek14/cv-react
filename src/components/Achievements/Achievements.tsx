import type { Achievement } from "../../types/Achievement";

const SingleAchievement = ({ achievement }: { achievement: Achievement }) => {
    return <div className="flex flex-col gap-3">
        <h3 className="text-xl">{ achievement.name }</h3>
        <p className="text-justify text-sm">{ achievement.description }</p>
    </div>
}

export const Achievements = ({ achievements }: { achievements: Achievement[] }) => {
    return <section className="flex flex-col gap-8 p-16 bg-black">
        <h2 className="text-4xl font-semibold">Osiągnięcia i wyróżnienia</h2>
        <div className="flex flex-col gap-6">
            {achievements.map(achievement => <SingleAchievement achievement={achievement} />)}
        </div>
    </section>
}