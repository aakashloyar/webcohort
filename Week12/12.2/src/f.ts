type event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
//handleEvent('scroll')//cannot bcz excluded