export type LetterHeaderBlock = {
  lines: string[];
};

export type CompiledLetter = {
  headerLeft: LetterHeaderBlock;
  headerRight: LetterHeaderBlock;
  subject: string;
  paragraphs: [string, string, string];
  signOff: string;
};
