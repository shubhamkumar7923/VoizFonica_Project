package com.sr.controller;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.mail.MessagingException;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import com.sr.model.Payment;

@Component
public class SmtpMailSender 
{
	@Autowired
	private JavaMailSender javamailsender;
	
	public void send(String to,String subject,String body) throws MessagingException
	{
		MimeMessage message=javamailsender.createMimeMessage();
		MimeMessageHelper helper;
		helper=new MimeMessageHelper(message,true);
		helper.setSubject(subject);
		helper.setTo(to);
		helper.setText(body,true);
		javamailsender.send(message);
		
	}
	public void sendMail(Payment pay) throws MessagingException {
		
		String subject="Voizfonica Payment";
		String to=pay.getEmailId();
		
		System.out.println(pay.getName());
		String body = "<p>Dear " + pay.getName()  +",</p>";

		

		body +="<!doctype html>\r\n"
				+ "<html>\r\n"
				+ "<head>\r\n"
				+ "    <meta charset=\"utf-8\">\r\n"
				+ "    <title>A simple, clean, and responsive HTML invoice template</title>\r\n"
				+ "    \r\n"
				+ "    <style>\r\n"
				+ "    .invoice-box {\r\n"
				+ "        max-width: 800px;\r\n"
				+ "        margin: auto;\r\n"
				+ "        padding: 30px;\r\n"
				+ "        border: 1px solid #eee;\r\n"
				+ "        background-color: #F8F8FF; \r\n"
				+ "        box-shadow: 0 0 10px rgba(0, 0, 0, .15);\r\n"
				+ "        font-size: 16px;\r\n"
				+ "        line-height: 24px;\r\n"
				+ "        font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;\r\n"
				+ "        color: #555;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table {\r\n"
				+ "        width: 100%;\r\n"
				+ "        line-height: inherit;\r\n"
				+ "        text-align: left;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table td {\r\n"
				+ "        padding: 5px;\r\n"
				+ "        vertical-align: top;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table tr td:nth-child(2) {\r\n"
				+ "        text-align: right;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table tr.top table td {\r\n"
				+ "        padding-bottom: 20px;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table tr.top table td.title {\r\n"
				+ "        font-size: 45px;\r\n"
				+ "        line-height: 45px;\r\n"
				+ "        color: #333;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table tr.information table td {\r\n"
				+ "        padding-bottom: 40px;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table tr.heading td {\r\n"
				+ "        background: #eee;\r\n"
				+ "        border-bottom: 1px solid #ddd;\r\n"
				+ "        font-weight: bold;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table tr.details td {\r\n"
				+ "        padding-bottom: 20px;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table tr.item td{\r\n"
				+ "        border-bottom: 1px solid #eee;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table tr.item.last td {\r\n"
				+ "        border-bottom: none;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .invoice-box table tr.total td:nth-child(2) {\r\n"
				+ "        border-top: 2px solid #eee;\r\n"
				+ "        font-weight: bold;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    @media only screen and (max-width: 600px) {\r\n"
				+ "        .invoice-box table tr.top table td {\r\n"
				+ "            width: 100%;\r\n"
				+ "            display: block;\r\n"
				+ "            text-align: center;\r\n"
				+ "        }\r\n"
				+ "        \r\n"
				+ "        .invoice-box table tr.information table td {\r\n"
				+ "            width: 100%;\r\n"
				+ "            display: block;\r\n"
				+ "            text-align: center;\r\n"
				+ "        }\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    /** RTL **/\r\n"
				+ "    .rtl {\r\n"
				+ "        direction: rtl;\r\n"
				+ "        font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .rtl table {\r\n"
				+ "        text-align: right;\r\n"
				+ "    }\r\n"
				+ "    \r\n"
				+ "    .rtl table tr td:nth-child(2) {\r\n"
				+ "        text-align: left;\r\n"
				+ "    }\r\n"
				+ "    </style>\r\n"
				+ "</head>\r\n"
				+ "\r\n"
				+ "<body>\r\n"
				+ "    <div class=\"invoice-box\">\r\n"
				+ "        <table cellpadding=\"0\" cellspacing=\"0\">\r\n"
				+ "            <tr class=\"top\">\r\n"
				+ "                <td colspan=\"2\">\r\n"
				+ "                    <table>\r\n"
				+ "                        <tr>\r\n"
				+ "                            <td class=\"title\">\r\n"
//				+ "                                <img src=\"https://www.sparksuite.com/images/logo.png\" style=\"width:100%; max-width:300px;\">\r\n"
				                                   +"<h3>VOIZFONICA</h3>"
				+ "                            </td>\r\n"
				+ "                            \r\n"
				+ "                            <td>\r\n"
				+ "                                Invoice <br>\r\n"
				                                
				+ "                            </td>\r\n"
				+ "                        </tr>\r\n"
				+ "                    </table>\r\n"
				+ "                </td>\r\n"
				+ "            </tr>\r\n"
				+ "            \r\n"
				+ "            <tr class=\"information\">\r\n"
				+ "                <td colspan=\"2\">\r\n"
				+ "                    <table>\r\n"
				+ "                        <tr>\r\n"
				+ "                            <td>\r\n"
//				+ "                                Sparksuite, Inc.<br>\r\n"
//				+ "                                12345 Sunny Road<br>\r\n"
//				+ "                                Sunnyville, CA 12345\r\n"
				+ "                            </td>\r\n"
				+ "                            \r\n"
				+ "                            <td>\r\n"
//				+ "                                Acme Corp.<br>\r\n"
				+                                pay.getName()+"<br>\r\n"
				+                                pay.getEmailId()+"\r\n"
				+ "                            </td>\r\n"
				+ "                        </tr>\r\n"
				+ "                    </table>\r\n"
				+ "                </td>\r\n"
				+ "            </tr>\r\n"
				+ "            \r\n"
				+ "            <tr class=\"heading\">\r\n"
				+ "                <td>\r\n"
				+ "                    Payment Details\r\n"
				+ "                </td>\r\n"
				+ "                \r\n"
				+ "                <td>\r\n"
//				+ "                    Check #\r\n"
				+ "                </td>\r\n"
				+ "            </tr>\r\n"
				+ "            \r\n"
				+ "            <tr class=\"details\">\r\n"
				+ "                <td>\r\n"
//				+ "                    Check\r\n"
				+ "                </td>\r\n"
				+ "                \r\n"
				+ "                <td>\r\n"
//				+ "                    1000\r\n"
				+ "                </td>\r\n"
				+ "            </tr>\r\n"
				+ "            \r\n"
				+ "            <tr class=\"item\">\r\n"
				+ "                <td>\r\n"
				+ "                    Mobile No.\r\n"
				+ "                </td>\r\n"
				+ "                \r\n"
				+ "                <td>\r\n"
				+ pay.getPhone()+"\r\n"
				+ "                </td>\r\n"
				+ "            </tr>\r\n"
				+ "            \r\n"
				+ "            <tr class=\"item\">\r\n"
				+ "                <td>\r\n"
				+                     "Service\r\n"
				+ "                </td>\r\n"
				+ "                \r\n"
				+ "                <td>\r\n"
				+ pay.getService()+"\r\n"
				+ "                </td>\r\n"
				+ "            </tr>\r\n"
				+ "            \r\n"
				+ "            <tr class=\"item\">\r\n"
				+ "                <td>\r\n"
				+ "                    Cost\r\n"
				+ "                </td>\r\n"
				+ "                \r\n"
				+ "                <td>\r\n"
				+ pay.getCost()+"\r\n"
				+ "                </td>\r\n"
				+ "            </tr>\r\n"
				+ "            \r\n"
				+ "<tr class=\"item\">\r\n"
				+ "                <td>\r\n"
			    +                     "Benefits\r\n"
			    + "                </td>\r\n"
				+ "                \r\n"
			    + "                <td>\r\n"
				+ pay.getBenifits()+"\r\n"
				+ "                </td>\r\n"
				+ "            </tr>\r\n"
				+ "            \r\n"
				+ "            <tr class=\"item last\">\r\n"
				+ "                <td>\r\n"
				+ "                    Validity\r\n"
				+ "                </td>\r\n"
				+ "                \r\n"
				+ "                <td>\r\n"
				+ pay.getValidity()+" days\r\n"
				+ "                </td>\r\n"
				+ "            </tr>\r\n"
				+ "            \r\n"
//				+ "            <tr class=\"total\">\r\n"
//				+ "                <td></td>\r\n"
//				+ "                \r\n"
//				+ "                <td>\r\n"
//				+ "                   Total: $385.00\r\n"
//				+ "                </td>\r\n"
//				+ "            </tr>\r\n"
				+ "        </table>\r\n"
				+ "    </div>\r\n"
				+"<p>Thank you </p>"
				+ "</body>\r\n"
				+ "</html>";

		MimeMessage message=javamailsender.createMimeMessage();
		MimeMessageHelper helper;
		helper=new MimeMessageHelper(message,true);
		helper.setSubject(subject);
		helper.setTo(to);
		
		
		helper.setText(body, true);
		
//		helper.setText(body,true);
		//ClassPathResource pdf = new ClassPathResource("static/invoice.pdf");
		//helper.addAttachment("attachment.pdf", pdf);
		javamailsender.send(message);
	}
}
