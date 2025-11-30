const CLAUSE_CONTENTS = "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).";

export const Clause = ({ signatureImageUrl, place, date }: { signatureImageUrl: string, place: string, date: string }) => {
    return <section className="flex flex-col gap-4 p-16">
        <p className="text-sm">{ CLAUSE_CONTENTS }</p>
        <div className="self-end flex flex-col items-end gap-1">
            <img src={ signatureImageUrl } className="w-32" />
            <span className="text-sm">{ place }, { date }</span>
        </div>
    </section>
}