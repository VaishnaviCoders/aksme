'use client';

import { PlaceholdersAndVanishInput } from './placeholders-and-vanish-input';

export function AskMeInput() {
  const placeholders = [
    'what is your name?',
    'are you a developer?',
    'what is your favorite coding language?',
    'how many years of experience do you have?',
    'how many projects have you worked on?',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };
  return (
    <div className="h-[40rem] w-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Me Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
