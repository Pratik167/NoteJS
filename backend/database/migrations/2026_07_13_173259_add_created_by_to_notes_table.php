<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up(): void
{
    if (!Schema::hasColumn('notes', 'created_by')) {
        Schema::table('notes', function (Blueprint $table) {
            $table->string('created_by')->after('faculty');
        });
    }
}

public function down(): void
{
    if (Schema::hasColumn('notes', 'created_by')) {
        Schema::table('notes', function (Blueprint $table) {
            $table->dropColumn('created_by');
        });
    }
}
};
