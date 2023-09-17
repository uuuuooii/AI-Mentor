import { ChatInputProps } from '@/components/chat/chatInput/type';
import { chatbotPrompt } from '@/helper/constans/chatbotPrompt';
import {
  ChatGPTMessage,
  OpenAIStream,
  OpenAIStreamPayload,
} from '@/lib/openAi/openAiStrem';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const outboundMessage: ChatGPTMessage[] = messages.map(
      (message: ChatInputProps) => ({
        role: message.isUserMessage ? 'user' : 'system',
        content: message.text,
      })
    );

    outboundMessage.unshift({
      role: 'system',
      content: chatbotPrompt,
    });

    const payload: OpenAIStreamPayload = {
      model: 'gpt-3.5-turbo',
      messages: outboundMessage,
      temperature: 0,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 150,
      stream: true,
      n: 1,
    };

    const stream = await OpenAIStream(payload);

    // POST 요청을 받았을 때 콘솔에 메시지 출력
    console.log('POST 요청이 수신되었습니다.');

    return new Response(stream);
  } catch (error) {
    console.error('POST 요청 처리 중 오류 발생:', error);
    // 오류 처리 및 응답
  }
}
