export default function InputFootbol({ league, changeLeague }) {
  return (
    <div className="flex flex-col gap-1.5 max-w-xs m-3">
      <label
        htmlFor="league-select-min"
        className="text-blue-900 text-xs font-bold uppercase tracking-wider pl-1"
      >
        Competición
      </label>
      <div className="relative">
        <select
          id="league-select-min"
          name="selectedLeague"
          defaultValue={league}
          onChange={(e) => changeLeague(e.target.value)}
          className="w-full appearance-none rounded-lg bg-slate-100 hover:bg-slate-200/80 px-4 py-2.5 text-base font-semibold text-blue-950 outline-none transition-colors cursor-pointer pr-10 focus:ring-2 focus:ring-slate-300"
        >
          <option value="1">Liga 1</option>
          <option value="2">Liga 2</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-blue-950/70">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
