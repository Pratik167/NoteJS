<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
{
    if (!Schema::hasColumn('notes', 'faculty')) {
        Schema::table('notes', function (Blueprint $table) {
            $table->string('faculty')->after('title');
        });
    }
}

    public function down(): void
    {
        Schema::table('notes', function (Blueprint $table) {
            $table->dropColumn('faculty');
        });
    }
};