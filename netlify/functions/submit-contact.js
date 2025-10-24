const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Método não permitido' };
  }

  const formData = JSON.parse(event.body);

  // Validação simples
  if (!formData.name || !formData.email || !formData.phone || !formData.message) {
    return { statusCode: 400, body: 'Campos obrigatórios faltando' };
  }

  // Conexão com Supabase (use variáveis de ambiente no Netlify)
  const supabaseUrl = 'https://wezeychhjuufrvewjopg.supabase.co'
  const supabaseKey = process.env.SeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlemV5Y2hoanV1ZnJ2ZXdqb3BnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMzAxMjksImV4cCI6MjA3NjkwNjEyOX0.mJfh8X59KS6iZstW8O0nABfMH1g7o2wjBVC4LXI5WXM;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase
    .from('contacts')
    .insert([{
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
    }]);

  if (error) {
    console.error('Erro no Supabase:', error);
    return { statusCode: 500, body: 'Erro ao salvar dados' };
  }

  // Opcional: Enviar email com SendGrid (instale npm install @sendgrid/mail)
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: 'contato@vazti.com.br',
  //   from: 'no-reply@vazti.com.br', // Use um email verificado no SendGrid
  //   subject: `Novo contato de ${formData.name} - ${formData.company}`,
  //   text: `Nome: ${formData.name}\nEmail: ${formData.email}\n...`, // Adicione o body completo
  // });

  return { statusCode: 200, body: JSON.stringify({ message: 'Contato salvo com sucesso!' }) };
};