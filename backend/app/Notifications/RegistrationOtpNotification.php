<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Contracts\Queue\ShouldQueue;

class RegistrationOtpNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(protected string $otp) {}

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Verify your email address')
            ->greeting('Hello!')
            ->line('Your verification code is:')
            ->line("**{$this->otp}**")
            ->line('This code will expire in 10 minutes.')
            ->line('If you did not request this, no further action is needed.');
    }
}