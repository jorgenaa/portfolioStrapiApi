module.exports = {
    index: async ctx => {
        await strapi.plugins['email'].services.email.send({
            to: "jorgen.arnes@gmail.com",
            from: "jorgen.arnes@gmail.com",
            replyTo: "jorgen.arnes@gmail.com",
            subject: "Testing Sendgrid and Strapi",
            text: "Sendgrig email",
            html: "Hello World"
        });
        ctx.send("Email sent");
    }
}