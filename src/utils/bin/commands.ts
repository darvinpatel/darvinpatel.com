// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

export const gui = async (args: string[]): Promise<string> => {
  window.open(`${config.gui}`);
  return 'Opening GUI...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i do not want to create more directories.
they would be empty anyway, just like my bank balance.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ██████╗  █████╗ ██████╗ ██╗   ██╗██╗███╗   ██╗    ██████╗  █████╗ ████████╗███████╗██╗     
  ██╔══██╗██╔══██╗██╔══██╗██║   ██║██║████╗  ██║    ██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║     
  ██║  ██║███████║██████╔╝██║   ██║██║██╔██╗ ██║    ██████╔╝███████║   ██║   █████╗  ██║     
  ██║  ██║██╔══██║██╔══██╗╚██╗ ██╔╝██║██║╚██╗██║    ██╔═══╝ ██╔══██║   ██║   ██╔══╝  ██║     
  ██████╔╝██║  ██║██║  ██║ ╚████╔╝ ██║██║ ╚████║    ██║     ██║  ██║   ██║   ███████╗███████╗
  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝
                                                                                             

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'gui' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.gui}" target="_blank">here</a></u> for a simpler version.
`;
};
